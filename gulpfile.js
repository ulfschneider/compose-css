const { series, watch } = require('gulp');
const processingCSS = require('./processing-css');
const processingDoc = require('./doc/processing-doc');
const processingDocCSS = require('./doc/processing-doc-css');


const watcher = () => {
    watch(['src/*.css', 'src/*.scss', 'doc/prism.css', 'doc/customize.css', 'doc/doc.md', 'doc/processing-doc.js'], series([processingCSS, processingDoc, processingDocCSS]));
};

exports.default = series([processingCSS, processingDoc, processingDocCSS]);
exports.watch = watcher;