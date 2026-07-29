'use strict';
const { buildPortPages } = require('./templates/portChapter');
const { renderPagesToPdf } = require('./render');
const triest = require('./data/triest');

(async () => {
  const pages = buildPortPages(triest);
  await renderPagesToPdf(pages, '/tmp/test_triest.pdf', '/tmp/test_triest.html');
})();
