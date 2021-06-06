<div class="title">
<h1>Compose CSS</h1>
<span class="bg-primary white pdx-d3">v{{compose-version}}</span>
<div>A composable CSS Toolkit to build fast, maintainable, and responsive websites.</div>
</div>

[[toc]]

## Install

Add the `compose-css` npm package to your node project. Install with:

~~~shell
npm i compose-css
~~~

Ideally, you run at least a `postcss-import` to load `compose-css` into your project, followed by a `postcss-custom-properties` , a `postcss-purgecss` , and a `cssnano` build-pipeline to reduce the size of the initial compose-css by removing styles you don´t use. As an example, your `postcss.config.js` file would look in some way like this:

~~~javascript
module.exports = {

    plugins: [
        require('postcss-import'),
        require('postcss-custom-media'),
        require('postcss-custom-properties')({
            preserve: false
        }),
        require('postcss-calc'),
        require('@fullhuman/postcss-purgecss')({
        content: [
                /*decide about the content to search for CSS classes to keep*/
                /*...*/
            ],
            whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] /*check https://flaviocopes.com/tailwind-setup/ */       
        }),        
        require('cssnano')
    ]

}
~~~

## Typography

## Lists

## Tables

## Figures

## Images

## Colors

## Layout
