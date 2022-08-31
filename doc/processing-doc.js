const SOURCE = 'doc/doc.md';
const DEST = 'index.html';

const package = require(`${process.cwd()}/package.json`);

const fs = require('fs');
const cheerio = require('cheerio');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTableOfContents = require('markdown-it-toc-done-right');
const markdownItDefList = require('markdown-it-deflist');
const markdownItFitMedia = require('markdown-it-fitmedia');
const markdownItScrollTable = require('markdown-it-scrolltable');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItPrism = require('markdown-it-prism');

function getMarkdownLib() {
    const mdlib = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
        quotes: "„“‚‘"
    })
        .use(markdownItAnchor, {
            permalink: true,
            permalinkClass: 'anchor',
            permalinkSymbol: '#',
            permalinkBefore: false,
            permalinkSpace: true
        })
        .use(markdownItTableOfContents, { containerClass: 'table-of-contents fluid-columns-5 bleed-right' })
        .use(markdownItDefList)
        .use(markdownItFitMedia, {
            imgDir: './'
        })
        .use(markdownItScrollTable)
        .use(markdownItAttrs)
        .use(markdownItFootnote)
        .use(markdownItPrism);

    return mdlib;
}


function processingDoc(callback) {
    let source = fs.readFileSync(SOURCE, 'utf8');
    const mdlib = getMarkdownLib();
    let doc = mdlib.render(source).replace('{{compose-version}}', package.version);
    let wrapper = `<main class="outline mxw-lg mrx-auto">${doc}</main>`;

    $ = cheerio.load(wrapper);

    $('<meta charset="utf-8">').appendTo('head');
    $('<meta http-equiv="X-UA-Compatible" content="IE=edge">').appendTo('head');
    $('<meta name="viewport" content="width=device-width, initial-scale=1">').appendTo('head');
    $('<title>Compose CSS</title>').appendTo('head');

    $('<link rel="stylesheet" href="/doc.css"/>').appendTo('head');
    $(`<script defer src="/resources/sotable-min.js"></script>
    <script defer src="/resources/active-toc-min.js"></script>
    <script>
    addEventListener('load', () => { ActiveToc.init('.table-of-contents'); sotable({whiteList: '.soso'})}); //activate sotable functionalty on load
    `).appendTo('head');
    $('html').addClass('auto-dark-mode');
    $('body').addClass('pd outdent');

    fs.writeFileSync(DEST, $.html(), 'utf8');
    callback();
}

module.exports = processingDoc;