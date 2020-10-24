module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-custom-media'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-discard-comments'),
        require('autoprefixer'),
        require('postcss-reporter'),
        require('cssstats'),
        require('cssnano'),
    ]
}