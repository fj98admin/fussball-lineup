'use strict';
const { buildPortPages } = require('./templates/portChapter');
const { renderPagesToPdf } = require('./render');
const data = require('./data/dubrovnik');

(async () => {
  const pages = buildPortPages(data);
  await renderPagesToPdf(pages, '/tmp/test_dubrovnik.pdf', '/tmp/test_dubrovnik.html');
})();
