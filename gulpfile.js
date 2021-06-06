const { series, watch } = require('gulp');
const processingCSS = require('./processing-css');
const processingDoc = require('./doc/processing-doc');
const processingDocCSS = require('./doc/processing-doc-css');


const watcher = () => {
    watch(['doc/doc.md'], processingDoc);
    watch(['src/*.css'], processingDocCSS);
    watch(['compose/compose.css', 'doc/prism.css', 'doc/customize.css'], processingDocCSS);
};

exports.default = series([processingDoc, processingCSS, processingDocCSS]);
exports.watch = watcher;