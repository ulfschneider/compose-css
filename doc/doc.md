<header class="title">
<h1>Compose CSS</h1>
<span class="bg-primary white pd-d3">Version {{compose-version}}</span>
<p>A composable CSS Toolkit to build fast, maintainable, and responsive websites.</p>
</header>

[[toc]]

## Install

Add the `compose-css` npm package to your `node` project. Install with:

```shell
npm i compose-css
```

Ideally, you run at least a `postcss-import` to load `compose-css` into your project, followed by a `postcss-custom-properties` , a `postcss-purgecss` , and a `cssnano` build-pipeline to reduce the size of the initial compose-css by removing styles you don´t use. As an example, your `postcss.config.js` file would look in some way like this:

```javascript
module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-custom-media"),
        require("postcss-custom-properties")({
            preserve: false,
        }),
        require("postcss-calc"),
        require("@fullhuman/postcss-purgecss")({
            content: [
                /*decide about the content to search for CSS classes to keep*/
                /*...*/
            ],
            whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
            defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [] /*check https://flaviocopes.com/tailwind-setup/ */ ,
        }),
        require("cssnano"),
    ],
};
```

## Notation

CSS classes
:   In flowing text, a CSS class will be denoted with a starting period, e.g. <code>.css</code>. 

HTML tags
:   HTML tags in flowing text are denoted lowercase and and without pointing brackets, e.g. <code>strong</code>. 

In formatted code, CSS classes and HTML tags are presented syntactically correct.

## Typography

### Inline tags

<table class="underline-rows">
    <tr>
        <th>Element</th>
        <th>Set style with HTML tag or CSS class</th>
    </tr>
    <tr>
    <td><span>Normal</span></td>
                    <td>
                        <code>.normal</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="#">Link</a>
                    </td>
                    <td>
                        <code>a</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Bold</b>
                    </td>
                    <td>
                        <code>strong</code>, <code>b</code>, <code>.strong</code>,
                        <code>.bold</code>,
                        <code>.b</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i>Italic</i>
                    </td>
                    <td>
                        <code>i</code>, <code>.i</code>, <code>.italic</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <u>Underline</u>
                    </td>
                    <td>
                        <code>u</code>, <code>.underline</code>
                    </td>
                </tr>
 <tr>
                    <td>
                        <span class="no-deco">No underline</span>
                    </td>
                    <td>
                        <code>.no-deco</code>
                    </td>
                </tr>                
                <tr>
                    <td>
                        <del>Deleted</del>
                    </td>
                    <td>
                        <code>del</code>, <code>.del</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="caps">Caps</span></td>
                    <td>
                        <code>.caps</code>, <code>.uppercase</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="lowercase">Lowercase</span></td>
                    <td>
                        <code>.lowercase</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="lsp">Spacing</span></td>
                    <td>
                        <code>.lsp</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>Highlighted</mark>
                    </td>
                    <td>
                        <code>mark</code>, <code>.mark</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <kbd>Ctrl+K</kbd>
                    </td>
                    <td>
                        <code>kbd</code>, <code>.kbd</code>
                    </td>
                </tr>
                <tr>
                    <td>Text with <sup>superscript</sup>
                    </td>
                    <td>
                        <code>sup</code>, <code>.sup</code>
                    </td>
                </tr>
                <tr>
                    <td>Text with <sub>subscript</sub>
                    </td>
                    <td>
                        <code>sub</code>, <code>.sub</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <cite>Citing the title of a work</cite>
                    </td>
                    <td>
                        <code>cite</code>, <code>.cite</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q>A quotation</q>
                    </td>
                    <td>
                        <code>q</code>, <code>.q</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <em>Emphasize</em>
                    </td>
                    <td>
                        <code>em</code>, <code>.em</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <s>Strike through</s>
                    </td>
                    <td>
                        <code>s</code>, <code>.s</code>, <code>.strike</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <small>Small</small>
                    </td>
                    <td>
                        <code>small</code>, <code>.small</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="smaller">Smaller</span>
                    </td>
                    <td>
                        <code>.smaller</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <code>Code</code>
                    </td>
                    <td>
                        <code>code</code>, <code>.code</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="meta">Meta text</span>
                    </td>
                    <td>
                        <code>.meta</code>
                    </td>
                </tr>               
            </table>

### Word wrapping

<div class="block br w-3 no-wrap mrr bg-neutral-5">No word wrap in small spaces</div>

~~~html
<div class="no-wrap">
No word wrap in small spaces
</div>
~~~

<div class="block br w-3 wrap-normal mrr bg-neutral-5">Normal word wrap in small spaces</div>

~~~html
<div class="wrap-normal">
Normal word wrap in small spaces
</div>
~~~

<div class="block br w-2 break-word mrr bg-neutral-5">Wrap and break word anywhere</div>

~~~html
<div class="break-word">
Wrap and break word anywhere
</div>
~~~

<div class="block br w-3 truncate mrr bg-neutral-5">
Truncate instead of word wrap
</div>

~~~html
<div class="truncate">
Truncate instead of word wrap
</div>
~~~

### Horizontal ruler

            

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.

---

He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.

~~~html
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<hr>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
~~~

Configure with: 

~~~css
:root {
    --hr-content: "·\0000a0\0000a0\0000a0·\0000a0\0000a0\0000a0·";
}
~~~

### Paragraph

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.

He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.

His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.

            

~~~html
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.</p>
~~~

### Indented Paragraph

<div class="indent">
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.</p>
</div>

            

~~~html
<div class="indent">
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.</p>
</div>
~~~

### Blockquote

<blockquote>
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<footer>Franz Kafka, <cite>The Metamorphosis</cite></footer>
</blockquote>

~~~html
<blockquote>
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<footer>Franz Kafka, <cite>The Metamorphosis</cite></footer>
</blockquote>
~~~

### Writing mode

<div class="sq-4 horizontal-tb br bg-neutral-5">
He lay on his armour-like back
</div>

~~~html
<div class="horizontal-tb">
He lay on his armour-like back
</div>
~~~

<div class="sq-4 vertical-lr br bg-neutral-5">
He lay on his armour-like back
</div>

~~~html
<div class="vertical-lr">
He lay on his armour-like back
</div>
~~~

<div class="sq-4 vertical-rl br bg-neutral-5">
He lay on his armour-like back
</div>

~~~html
<div class="vertical-rl">
He lay on his armour-like back
</div>
~~~

### Heading sizes

<table>
<tr><th class="right">Heading size</th><th>CSS class</th><tr>
                <tr>
                    <td class="h1 baseline pdy-0 right">H1</td>
                    <td class="baseline pdy-0"><code>.h1</code></td>
                </tr>
                <tr>
                    <td class="h2 baseline pdy-0 right">H2</td>
                    <td class="baseline pdy-0 no-wrap"><code>.h2</code></td>
                </tr>
                <tr>
                    <td class="h3 baseline pdy-0 right">H3</td>
                    <td class="baseline pdy-0"><code>.h3</code></td>
                </tr>
                <tr>
                    <td class="h4 baseline pdy-0 right">H4</td>
                    <td class="baseline pdy-0"><code>.h4</code></td>
                </tr>
                <tr>
                    <td class="h5 baseline pdy-0 right">H5</td>
                    <td class="baseline pdy-0 no-wrap"><code>.h5</code> <small>(1rem)</small>
                    </td>
                </tr>
                <tr>
                    <td class="h6 baseline pdy-0 right">H6</td>
                    <td class="baseline pdy-0 no-wrap">
                        <code>.h6</code>
                    </td>
                </tr>
            </table>
        

        
### Font sizes

Use to increase or decrease font-size relatively from the current font-size, assign CSS class <code>.larger</code> or <code>.smaller</code>.

<table>
<tr><th class="right">Font size</th><th>CSS class</th><tr>
                <tr>
                    <td class="fs-d1 baseline pdy-0 right lh pdy-0">Aa</td>
                    <td class="baseline pdy-0 pdy-0">
                        <code>.small</code>, <code>.fs-d1</code>
                    </td>
                </tr>
                <tr>
                    <td class="fs baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">
                        <code>.fs</code>, <code>.fs-default</code>
                        <small>(1rem)</small>
                    </td>
                </tr>
                <tr>
                    <td class="fs-1 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-1</td>
                </tr>
                <tr>
                    <td class="fs-2 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-2</td>
                </tr>
                <tr>
                    <td class="fs-3 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-3</td>
                </tr>
                <tr>
                    <td class="fs-4 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-4</td>
                </tr>
                <tr>
                    <td class="fs-5 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-5</td>
                </tr>
                <tr>
                    <td class="fs-6 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-6</td>
                </tr>
                <tr>
                    <td class="fs-7 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-7</td>
                </tr>
                <tr>
                    <td class="fs-8 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-8</td>
                </tr>
                <tr>
                    <td class="fs-9 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-9</td>
                </tr>
                <tr>
                    <td class="fs-10 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0">.fs-10</td>
                </tr>
            </table>
        

        
### Line height
<table class="mxw-rg">
<tr><th>Line height</th><th>CSS class</th><tr>
                <tr>
                    <td class="lh-d1 brt baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-d1 baseline pdl pd-0"><code>.lh-d1</code></td>
                </tr>
                <tr>
                    <td class="lh brt baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh baseline pdl pd-0">
                        <code>.lh</code>
                        <small>(1)</small>
                    </td>
                </tr>
                <tr>
                    <td class="lh-1 brt baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-1 baseline pdl pd-0"><code>.lh-1</code></td>
                </tr>
                <tr>
                    <td class="lh-2 brt baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-2 baseline pdl pd-0"><code>.lh-2</code></td>
                </tr>
                <tr>
                    <td class="lh-3 brt baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-3 baseline pdl pd-0">
                        <code class="no-wrap">.lh-3</code>,
                        <code class="no-wrap">.lh-default</code>
                    </td>
                </tr>
                <tr>
                    <td class="lh-4 brt m brb baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-4 baseline pdl pd-0"><code>.lh-4</code></td>
                </tr>
                <tr>
                    <td class="lh-5 brt m brb baseline pd-0 bg-neutral-5">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-5 baseline pdl pd-0"><code>.lh-5</code></td>
                </tr>
            </table>
        
### Rhythm

## Lists

## Tables

## Figures

## Images

## Colors

## Layout

## Forms

<button>A button</button>