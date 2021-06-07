const { series, watch } = require('gulp');
const processingCSS = require('./processing-css');
const processingDoc = require('./doc/processing-doc');
const processingDocCSS = require('./doc/processing-doc-css');


const watcher = () => {
    watch(['doc/doc.md', 'doc/processing-doc.js'], series([processingDoc, processingDocCSS]));
    watch(['src/*.css'], series([processingCSS, processingDocCSS]));
    watch(['doc/prism.css', 'doc/customize.css'], processingDocCSS);
};

exports.default = series([processingCSS, processingDoc, processingDocCSS]);
exports.watch = watcher;