const { series, watch } = require('gulp');
const processingCSS = require('./processing-css');
const doc = require('./doc/processing-doc');
const processingDocCSS = require('./doc/processing-doc-css');


const processingDoc = (callback) => {
    doc();
    callback();
}

const watcher = () => {
    watch(['doc/compose.md'], processingDoc);
    watch(['css/compose.css', 'doc/prism.css', 'doc/customize.css'], processingDocCSS)
    watch(['src/*.css'], processingCSS)
};

exports.default = series([processingDoc, processingCSS, processingDocCSS]);
exports.watch = watcher;