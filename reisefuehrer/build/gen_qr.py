#!/usr/bin/env python3
"""Generate real, scannable QR codes locally (no network needed).
Usage: python3 gen_qr.py manifest.json
manifest.json: [{"out": "assets/qr/xyz.png", "data": "https://..."}]
"""
import json
import sys
from pathlib import Path

import qrcode
from qrcode.constants import ERROR_CORRECT_M

ROOT = Path(__file__).resolve().parent.parent


def main():
    manifest = json.loads(Path(sys.argv[1]).read_text())
    for item in manifest:
        out = ROOT / item["out"]
        out.parent.mkdir(parents=True, exist_ok=True)
        qr = qrcode.QRCode(error_correction=ERROR_CORRECT_M, border=1, box_size=10)
        qr.add_data(item["data"])
        qr.make(fit=True)
        img = qr.make_image(fill_color="#0B2E4F", back_color="white")
        img.save(out)
        print(f"OK {out.name}  <-  {item['data'][:70]}")


if __name__ == "__main__":
    main()
