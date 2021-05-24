const { series, watch } = require('gulp');
const processingCSS = require('./processing-css');
const doc = require('./doc/processing-doc');
const processingDocCSS = require('./doc/processing-doc-css');


const processingDoc = (callback) => {
    doc();
    callback();
}

const watcher = () => {
    watch(['src/*.css'], processingCSS)
    watch(['css/compose.css', 'doc/prism.css', 'doc/customize.css'], processingDocCSS)
    watch('doc/compose.md', processingDoc);
};

exports.default = series([processingCSS, processingDocCSS, processingDoc]);
exports.watch = watcher;