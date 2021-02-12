module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-custom-media')({
            preserve: true
        })
    ]
}