'use strict';
const { buildPortPages } = require('./templates/portChapter');
const { renderPagesToPdf } = require('./render');
const data = require('./data/split');

(async () => {
  const pages = buildPortPages(data);
  await renderPagesToPdf(pages, '/tmp/test_split.pdf', '/tmp/test_split.html');
})();
