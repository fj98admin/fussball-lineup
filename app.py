import csv
import io
import re
import time
from typing import Optional

import requests
import streamlit as st
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Referer": "https://www.fussball.de/",
}


def extract_match_id(text: str) -> Optional[str]:
    text = text.strip()
    m = re.search(r"/spiel/([A-Z0-9]{26,})", text)
    if m:
        return m.group(1)
    m = re.search(r"\b([A-Z0-9]{26,})\b", text)
    if m:
        return m.group(1)
    return None


def get_html(url: str) -> str:
    r = requests.get(url, headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.text


def clean_name(name: Optional[str]) -> Optional[str]:
    if not name:
        return None
    name = re.sub(r"\s*\([^)]*\)\s*Spielerprofil$", "", name)
    name = re.sub(r"\s*Spielerprofil$", "", name)
    name = re.sub(r"\s*Basisprofil$", "", name)
    name = re.sub(r"\s+", " ", name).strip()
    return name or None


def format_number(num: Optional[str]) -> str:
    try:
        return str(int(str(num).strip()))
    except Exception:
        return "0"


def extract_name_from_profile(url: str) -> Optional[str]:
    try:
        html = get_html(url)
        soup = BeautifulSoup(html, "html.parser")

        h1 = soup.select_one("h1")
        if h1:
            text = clean_name(h1.get_text(" ", strip=True))
            if text:
                return text

        title = soup.title.get_text(" ", strip=True) if soup.title else ""
        if title:
            text = clean_name(title.split("|")[0].strip())
            if text and "fussball.de" not in text.lower():
                return text

        og = soup.select_one('meta[property="og:title"]')
        if og and og.get("content"):
            return clean_name(og["content"].split("|")[0].strip())

        meta_title = soup.select_one('meta[name="title"]')
        if meta_title and meta_title.get("content"):
            return clean_name(meta_title["content"].split("|")[0].strip())
    except Exception:
        return None

    return None


def has_class_fragment(tag, fragments) -> bool:
    cur = tag
    while cur is not None:
        classes = " ".join(cur.get("class", [])).lower()
        if any(fragment in classes for fragment in fragments):
            return True
        cur = getattr(cur, "parent", None)
    return False


def is_coach(tag) -> bool:
    return has_class_fragment(tag, ["coach", "trainer", "betreuer"])


def is_substitute(tag) -> bool:
    return has_class_fragment(
        tag, ["substitute", "substitutes", "bench", "ersatz", "replacement"]
    )


def is_starting(tag) -> bool:
    return has_class_fragment(tag, ["starting", "start"])


def get_raw_name_from_wrapper(tag) -> Optional[str]:
    first = tag.select_one(".player-name .firstname")
    last = tag.select_one(".player-name .lastname")

    if first and last:
        return f"{first.get_text(strip=True)} {last.get_text(strip=True)}"
    if first:
        return first.get_text(strip=True)
    if last:
        return last.get_text(strip=True)

    pn = tag.select_one(".player-name, .name, .coach-name, .trainer-name, .official-name")
    if pn:
        return pn.get_text(" ", strip=True)

    return None


def collect_players_from_wrappers(soup, home_team: str, away_team: str):
    players = []
    seen = set()

    for a in soup.select(".match-lineup .player-wrapper"):
        cls = a.get("class", [])
        side = "h" if "home" in cls else "g" if "away" in cls else None
        if not side:
            continue
        if is_coach(a):
            continue

        team = home_team if side == "h" else away_team
        number_el = a.select_one(".player-number")
        url = a.get("href")
        number = format_number(number_el.get_text(strip=True) if number_el else None)
        raw_name = get_raw_name_from_wrapper(a)

        role = "player"
        if is_substitute(a):
            role = "sub"
        elif is_starting(a):
            role = "player"

        key = (side, team, number, url, role)
        if key in seen:
            continue
        seen.add(key)

        players.append(
            {
                "side": side,
                "team": team,
                "profile_url": url,
                "number": number,
                "role": role,
                "raw_name": raw_name,
                "name": None,
            }
        )

    return players


def collect_coaches(soup, home_team: str, away_team: str):
    coaches = []
    seen = set()

    for tag in soup.select(".match-lineup .player-wrapper, .match-lineup a, .match-lineup div, .match-lineup li"):
        cls = tag.get("class", [])
        side = "h" if "home" in cls else "g" if "away" in cls else None
        if not side:
            continue
        if not is_coach(tag):
            continue

        team = home_team if side == "h" else away_team
        raw_name = get_raw_name_from_wrapper(tag)
        if not raw_name:
            continue

        key = (side, team, raw_name)
        if key in seen:
            continue
        seen.add(key)

        coaches.append(
            {
                "side": side,
                "team": team,
                "raw_name": raw_name,
                "name": None,
            }
        )

    return coaches


def build_char_map(players):
    char_map = {}

    for p in players:
        raw = p.get("raw_name")
        real = p.get("name")

        if not raw or not real:
            continue

        raw = raw.strip()
        real = real.strip()

        if len(raw) != len(real):
            continue

        ok = True
        for rc, tc in zip(raw, real):
            if rc in char_map and char_map[rc] != tc:
                ok = False
                break
        if not ok:
            continue

        for rc, tc in zip(raw, real):
            char_map[rc] = tc

    return char_map


def decode_with_map(text: Optional[str], char_map) -> Optional[str]:
    if not text:
        return None
    decoded = "".join(char_map.get(ch, "?" if ch != " " else " ") for ch in text)
    decoded = re.sub(r"\s+", " ", decoded).strip()
    return decoded or None


def parse_people(match_id: str):
    lineup_url = f"https://www.fussball.de/ajax.match.lineup/-/mode/PAGE/spiel/{match_id}"
    html = get_html(lineup_url)
    soup = BeautifulSoup(html, "html.parser")

    home_team = soup.select_one(".head .home .club-name").get_text(" ", strip=True)
    away_team = soup.select_one(".head .away .club-name").get_text(" ", strip=True)

    players = collect_players_from_wrappers(soup, home_team, away_team)
    coaches = collect_coaches(soup, home_team, away_team)

    return home_team, away_team, players, coaches


def build_csv_bytes(players, coaches) -> bytes:
    output = io.StringIO()
    writer = csv.writer(output, delimiter="\t")

    players_sorted = sorted(
        players,
        key=lambda x: (
            x["side"],
            0 if x["role"] == "player" else 1,
            int(x["number"]) if x["number"].isdigit() else 999,
        ),
    )

    for p in players_sorted:
        key = f"{p['side']}{p['number']}"
        value = f"{p['name']} ({p['team']}, #{p['number']})"
        writer.writerow([key, value])

    for c in coaches:
        key = f"{c['side']}co"
        value = f"{c['name']} ({c['team']}, Trainer)"
        writer.writerow([key, value])

    return output.getvalue().encode("utf-8-sig")


st.set_page_config(page_title="Fussball.de Lineup CSV", page_icon="⚽", layout="centered")
st.title("⚽ Fussball.de Lineup → CSV")
st.write("Füge einen Fußball.de-Spiel-Link oder direkt eine Match-ID ein.")

user_input = st.text_input(
    "Spiel-Link oder Match-ID",
    value="https://www.fussball.de/spiel/sg-baienfurt-sv-kehlen/-/spiel/02TO9MKOC0000000VS5489BUVSSD35NB#!/",
)

sleep_seconds = st.slider("Pause zwischen Profilabrufen (Sekunden)", 0.0, 2.0, 0.3, 0.1)

if st.button("CSV erstellen", type="primary"):
    match_id = extract_match_id(user_input)

    if not match_id:
        st.error("Keine gültige Match-ID gefunden.")
    else:
        try:
            with st.spinner("Lade Aufstellung und Profile ..."):
                home_team, away_team, players, coaches = parse_people(match_id)

                progress = st.progress(0.0)
                total = max(len(players), 1)

                for i, p in enumerate(players, start=1):
                    if p["profile_url"]:
                        p["name"] = extract_name_from_profile(p["profile_url"])
                    progress.progress(min(i / total, 1.0))
                    if sleep_seconds > 0:
                        time.sleep(sleep_seconds)

                players = [p for p in players if p["name"]]

                char_map = build_char_map(players)
                for c in coaches:
                    c["name"] = decode_with_map(c["raw_name"], char_map)

                csv_bytes = build_csv_bytes(players, coaches)

            st.success("Fertig.")

            st.subheader("Vorschau")
            preview_rows = []

            players_sorted = sorted(
                players,
                key=lambda x: (
                    x["side"],
                    0 if x["role"] == "player" else 1,
                    int(x["number"]) if x["number"].isdigit() else 999,
                ),
            )

            for p in players_sorted[:20]:
                preview_rows.append(
                    {
                        "Key": f"{p['side']}{p['number']}",
                        "Wert": f"{p['name']} ({p['team']}, #{p['number']})",
                    }
                )

            for c in coaches:
                preview_rows.append(
                    {
                        "Key": f"{c['side']}co",
                        "Wert": f"{c['name']} ({c['team']}, Trainer)",
                    }
                )

            st.dataframe(preview_rows, use_container_width=True)

            st.download_button(
                label="CSV herunterladen",
                data=csv_bytes,
                file_name=f"lineup_{match_id}.csv",
                mime="text/csv",
            )

            st.caption(f"Heim: {home_team} | Gast: {away_team}")

        except Exception as e:
            st.error(f"Fehler: {e}")