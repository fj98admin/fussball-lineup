'use strict';
const { buildPortPages } = require('./templates/portChapter');
const { renderPagesToPdf } = require('./render');
const data = require('./data/bari');

(async () => {
  const pages = buildPortPages(data);
  await renderPagesToPdf(pages, '/tmp/test_bari.pdf', '/tmp/test_bari.html');
})();
