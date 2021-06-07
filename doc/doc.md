<div class="title">
<h1>Compose CSS</h1>
<span class="bg-primary white pd-d3">v{{compose-version}}</span>
<p>A composable CSS Toolkit to build fast, maintainable, and responsive websites.</p>
</div>

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
        content.match(/[\w-/:]+(?<!:)/g) ||
        [] /*check https://flaviocopes.com/tailwind-setup/ */,
    }),
    require("cssnano"),
  ],
};
```

## Typography

### Elements

<table class="underline-rows">
    <tr>
        <th>Element</th>
        <th>Set style with CSS class or HTML tag</th>
    </tr>
                <tr>
                    <td>
                        <span>Normal</span></td>
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
                <tr>
                    <td>
                        <span class="no-deco">No text decoration, eg. for links</span>
                    </td>
                    <td>
                        <code>.no-deco</code>
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

<div class="sq-4 vertical-lr br bg-neutral-5">
He lay on his armour-like back
</div>

<div class="sq-4 vertical-rl br bg-neutral-5">
He lay on his armour-like back
</div>

## Lists

## Tables

## Figures

## Images

## Colors

## Layout
