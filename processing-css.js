const { dest, src } = require('gulp');
const postcss = require('gulp-postcss');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');

const CSS_SOURCE = ['src/*.css'];
const CSS_DEST = 'css';

const processingCSS = () => {
    console.log(`Processing CSS from ${CSS_SOURCE} into ${CSS_DEST}`);
    return src(CSS_SOURCE)
        .pipe(postcss([
            postcssImport(),
            postcssNested(),
            postcssCustomProperties({preserve: true}),
            postcssCustomMedia({preserve: true})            
        ]))
        .pipe(dest(CSS_DEST));
};


module.exports = processingCSS;