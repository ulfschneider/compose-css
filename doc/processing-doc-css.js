const { dest, src } = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCalc = require('postcss-calc');
const postcssPurgeCSS = require('@fullhuman/postcss-purgecss');
const cssNano = require('cssnano');

const DOCU_CSS_SOURCE = ['doc/doc.css'];
const DOCU_CSS_DEST = './';

const processingDocCSS = () => {
    console.log(`Processing CSS from ${DOCU_CSS_SOURCE} into ${DOCU_CSS_DEST}`);
    return src(DOCU_CSS_SOURCE)
        .pipe(postcss([
            postcssImport(),
            postcssCustomMedia(),
            postcssCustomProperties({ preserve: false }),
            postcssCalc(),
            postcssPurgeCSS({
                content: [
                    'resources/sotable-min.js',
                    'index-new.html',
                    'doc/prism.css',
                    'doc/customize.css'
                ],
                whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] //check https://flaviocopes.com/tailwind-setup/
            }),
            cssNano()
        ]))
        .pipe(dest(DOCU_CSS_DEST));
};


module.exports = processingDocCSS;