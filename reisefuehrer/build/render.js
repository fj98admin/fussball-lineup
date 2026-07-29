'use strict';
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function renderPagesToPdf(pagesHtml, outPdfPath, outHtmlPath) {
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
  const doc = `<!doctype html><html lang="de"><head><meta charset="utf-8"/>
  <title>Mein Schiff 4 — Adria Reiseführer 2026</title>
  <style>${css}</style></head><body>${pagesHtml.join('\n')}</body></html>`;

  if (outHtmlPath) fs.writeFileSync(outHtmlPath, doc, 'utf8');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(outHtmlPath || '/tmp/_render.html'), { waitUntil: 'networkidle' });
  if (!outHtmlPath) fs.writeFileSync('/tmp/_render.html', doc, 'utf8');
  await page.pdf({
    path: outPdfPath,
    width: '210mm',
    height: '297mm',
    printBackground: true,
    tagged: true,
    outline: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  await browser.close();
  console.log(`Rendered ${pagesHtml.length} pages -> ${outPdfPath}`);
}

module.exports = { renderPagesToPdf };
