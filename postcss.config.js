module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-custom-media')({
            preserve: true
        }),
        require('postcss-calc'),
        require('cssnano')({
            preset: ['default', {
                minifySelectors: false
            }]
        })

    ]
}