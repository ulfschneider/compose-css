const SOURCE = 'doc/compose.md';
const DEST = 'index-new.html';

const package = require('../package.json');

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
            typographer: true
        })
        .use(markdownItAnchor, {
            permalink: true,
            permalinkClass: 'anchor',
            permalinkSymbol: '#',
            permalinkBefore: false,
            permalinkSpace: true
        })
        .use(markdownItTableOfContents)
        .use(markdownItDefList)
        .use(markdownItFitMedia, {
            imgDir: './content'
        })
        .use(markdownItScrollTable)
        .use(markdownItAttrs)
        .use(markdownItFootnote)
        .use(markdownItPrism);

    return mdlib;
}


function processingDoc() {
    let source = fs.readFileSync(SOURCE, 'utf8');
    const mdlib = getMarkdownLib();
    let doc = mdlib.render(source).replace('{{compose-version}}', package.version);
    let wrapper = `<main class="mxw-rg mrx-auto pdx-1">${doc}</main>`;

    $ = cheerio.load(wrapper);

    $('<meta charset="utf-8">').appendTo('head');
    $('<meta http-equiv="X-UA-Compatible" content="IE=edge">').appendTo('head');
    $('<meta name="viewport" content="width=device-width, initial-scale=1">').appendTo('head');
    $('<title>Compose CSS</title>').appendTo('head');

    $('<link rel="stylesheet" href="doc.css"/>').appendTo('head');
    $('body').addClass('pd');

    fs.writeFileSync(DEST, $.html(), 'utf8');
}

module.exports = processingDoc;