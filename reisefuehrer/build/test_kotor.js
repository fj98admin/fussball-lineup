'use strict';
const { buildPortPages } = require('./templates/portChapter');
const { renderPagesToPdf } = require('./render');
const data = require('./data/kotor');

(async () => {
  const pages = buildPortPages(data);
  await renderPagesToPdf(pages, '/tmp/test_kotor.pdf', '/tmp/test_kotor.html');
})();
