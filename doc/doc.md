<header class="title">
<h1>Compose CSS</h1>
<span class="bg-primary white pd-d3">Version {{compose-version}}</span>
<p>A low-level CSS Toolkit to build fast, maintainable, and responsive websites.</p>
</header>

[[toc]]

## Preparatory

### Install Compose CSS

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

### Notation used in this document

* In flowing text, a CSS class will be denoted with a starting period, for example: <code>.css</code>.
* HTML tags in flowing text are denoted lowercase and with pointing brackets, for example: <code>&lt;strong></code>.
* In formatted code, CSS classes and HTML tags are presented syntactically correct. For example:
    ```html
    <div class="no-wrap">No word wrap in small spaces</div>
    ```

### Stepping through options

* Many CSS classes of Compose CSS allow to step up and down through multiple options of *the same thing.* For example, `line-height` can be set with `.lh-d1`, `.lh`, `.lh-1`, `.lh-2`, … , `.lh-5`. 
`.lh` stands for *1, the neutral value.* `.lh-d1` stands for *decrease one step down from the neutral value,* while `.lh-1` stands for *increase one step up from the neutral value,* `.lh-2` is *increase two steps up,* and so on. Please refer to [line-height](#line-height) for more details.
It could also be how dark or how light the primary color is set, like `.primary-d5`, `.primary-d4`, `.primary-d3`, … , `.primary`, `.primary-1`, `.primary-2`, … `.primary-5`, where `.primary` is the neutral primary color tone and `-d1`, `-d2`, … is making it darker, while `-1`, `-2`, … is making it lighter. Please refer to [colors](#colors) for more details. 
* A default value is often represented by a `-default` postfix added to the corresponding CSS class. For example, the default `line-height` that is used by Compose CSS defined by `.lh-3`, which can also be set by `.lh-default`.

<div class="bleed split-1-2">
<div class="bg-primary"><img src="/images/jayden-chong-unsplash.jpg"></div>
<div class="bg-accent-one"><img src="/images/matthew-henry-unsplash.jpg"></div>
</div>

## Typography

### Basic elements

<table class="underline-rows">
<thead>
    <tr>
        <th>Element</th>
        <th>Set style with HTML tag or CSS class</th>
        <th>Example</th>
    </tr>
    </thead>
    <tr>
    <td><span>Normal text</span></td>
                    <td>
                        <code>.normal</code>
                    </td>
                    <td><code>&lt;span class="normal">Normal text&lt;/span></code></td>
                </tr>
                <tr>
                    <td>
                        <a href="#">Link</a>
                    </td>
                    <td>
                        <code>&lt;a></code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Bold text</b>
                    </td>
                    <td>
                        <code>&lt;strong></code>, <code>&lt;b></code>, <code>.strong</code>,
                        <code>.bold</code>,
                        <code>.b</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i>Italic text</i>
                    </td>
                    <td>
                        <code>&lt;i></code>, <code>.i</code>, <code>.italic</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <u>Underlined text</u>
                    </td>
                    <td>
                        <code>&lt;u></code>, <code>.underline</code>
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
                        <del>Deleted text</del>
                    </td>
                    <td>
                        <code>&lt;del></code>, <code>.del</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="caps">Caps text</span></td>
                    <td>
                        <code>.caps</code>, <code>.uppercase</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="small-caps">Small caps text</span></td>
                    <td>
                        <code>.small-caps</code>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <span class="all-small-caps">All small caps text</span></td>
                    <td>
                        <code>.all-small-caps</code>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <span class="lowercase">Lowercase text</span></td>
                    <td>
                        <code>.lowercase</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="lsp">Letterspacing</span></td>
                    <td>
                        <code>.lsp</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>Highlighted text</mark>
                    </td>
                    <td>
                        <code>&lt;mark></code>, <code>.mark</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <kbd>CTRL</kbd>+<kbd>K</kbd>
                    </td>
                    <td>
                        <code>&lt;kbd></code>, <code>.kbd</code>
                    </td>
                </tr>
                <tr>
                    <td>Text with <sup>superscript</sup>
                    </td>
                    <td>
                        <code>&lt;sup></code>, <code>.sup</code>
                    </td>
                </tr>
                <tr>
                    <td>Text with <sub>subscript</sub>
                    </td>
                    <td>
                        <code>&lt;sub></code>, <code>.sub</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <cite>Citing the title of a work</cite>
                    </td>
                    <td>
                        <code>&lt;cite></code>, <code>.cite</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q>A quotation</q>
                    </td>
                    <td>
                        <code>&lt;q></code>, <code>.q</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <em>Emphasized text</em>
                    </td>
                    <td>
                        <code>&lt;em></code>, <code>.em</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <s>Striked through text</s>
                    </td>
                    <td>
                        <code>&lt;s></code>, <code>.s</code>, <code>.strike</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <small>Small text</small>
                    </td>
                    <td>
                        <code>&lt;small></code>, <code>.small</code>
                    </td>
                </tr>
 <tr>
                    <td>
                        <span class="smaller">Smaller text</span>
                    </td>
                    <td>
                        <code>.smaller</code>
                    </td>
                </tr>    
                <tr>
                    <td>
                        <span class="larger">Larger text</span>
                    </td>
                    <td>
                        <code>.larger</code>
                    </td>
                </tr>                            
                <tr>
                    <td>
                        <code>Code</code>
                    </td>
                    <td>
                        <code>&lt;code></code>, <code>.code</code>
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

        

### Font size

To increase or decrease font size in relation to the current font size, assign CSS class <code>.larger</code> or <code>.smaller</code>. For example:

This is a paragraph with <span class="smaller">smaller</span> and <span class="larger">larger</span> text.

```html
<p>
    This is a paragraph with <span class="smaller">smaller</span> and
    <span class="larger">larger</span> text.
</p>
```

Configure the amount of relative decrease and increase with:

```css
:root {
    --smaller: .9em;
    --larger: calc(var(--size-factor) * 1em);
}
```

For absolute sizing of fonts use the below listed CSS classes.

<table>
<tr><th class="right">Font size</th><th>CSS class</th><tr>
                <tr>
                    <td class="fs-d1 baseline pdy-0 right lh pdy-0">Aa</td>
                    <td class="baseline pdy-0 pdy-0">
                        <code>&lt;small&gt;</code>, <code>.small</code>, <code>.fs-d1</code>
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
                    <td class="baseline pdy-0"><code>&lt;large&gt;</code>, <code>.large</code>, <code>.fs-1</code></td>
                </tr>
                <tr>
                    <td class="fs-2 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-2</code></td>
                </tr>
                <tr>
                    <td class="fs-3 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-3</code></td>
                </tr>
                <tr>
                    <td class="fs-4 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-4</code></td>
                </tr>
                <tr>
                    <td class="fs-5 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-5</code></td>
                </tr>
                <tr>
                    <td class="fs-6 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-6</code></td>
                </tr>
                <tr>
                    <td class="fs-7 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-7</code></td>
                </tr>
                <tr>
                    <td class="fs-8 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-8</code></td>
                </tr>
                <tr>
                    <td class="fs-9 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-9</code></td>
                </tr>
                <tr>
                    <td class="fs-10 baseline pdy-0 lh right">Aa</td>
                    <td class="baseline pdy-0"><code>.fs-10</code></td>
                </tr>
            </table>

Configure the font sizing steps with:

```css
:root {
    --size-factor: 1.25;
    /*for increasing steps starting from --fs*/
    --base-font-size: 19px;
    /*this is the normal font size represented by 1rem*/
    --fs: 1rem;
    --fs-mono: .9rem;
    --fs-d1: .9rem;
    --small: var(--fs-d1);
    --large: var(--fs-1);
}
```

### Headings

### Heading size

Take the size and line height of headings and apply it to any element *without* making that element a heading.

<table>
<tr><th class="right">Heading size and line height</th><th>CSS class</th><tr>
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
                    <td class="baseline pdy-0 no-wrap"><code>.h5</code></td>
                </tr>
                <tr>
                    <td class="h6 baseline pdy-0 right">H6</td>
                    <td class="baseline pdy-0 no-wrap">
                        <code>.h6</code>
                    </td>
                </tr>
            </table>

        

### Line height

<table class="mxw-rg">
<tr><th>Line height</th><th>CSS class</th><tr>
                <tr>
                    <td class="lh-d1 brt baseline bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-d1 baseline"><code>.lh-d1</code></td>
                </tr>
                <tr>
                    <td class="lh brt baseline bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh baseline">
                        <code>.lh</code>
                    </td>
                </tr>
                <tr>
                    <td class="lh-1 brt baseline bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-1 baseline"><code>.lh-1</code></td>
                </tr>
                <tr>
                    <td class="lh-2 brt baseline bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-2 baseline"><code>.lh-2</code></td>
                </tr>
                <tr>
                    <td class="lh-3 brt baseline bg-neutral-5">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-3 baseline">
                        <code class="no-wrap">.lh-3</code>, 
                        <code class="no-wrap">.lh-default</code>
                    </td>
                </tr>
                <tr>
                    <td class="lh-4 brt m brb baseline bg-neutral-5">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-4 baseline"><code>.lh-4</code></td>
                </tr>
                <tr>
                    <td class="lh-5 brt m brb baseline bg-neutral-5">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-5 baseline"><code>.lh-5</code></td>
                </tr>
            </table>

        

### Rhythm

### Word wrapping

<div class="block br w-3 no-wrap mrr bg-neutral-5">No word wrap in small spaces</div>

```html
<div class="no-wrap">No word wrap in small spaces</div>
```

<div class="block br w-3 wrap-normal mrr bg-neutral-5">Normal word wrap in small spaces</div>

```html
<div class="wrap-normal">Normal word wrap in small spaces</div>
```

<div class="block br w-2 break-word mrr bg-neutral-5">Wrap and break word anywhere</div>

```html
<div class="break-word">Wrap and break word anywhere</div>
```

<div class="block br w-3 truncate mrr bg-neutral-5">
Truncate instead of word wrap
</div>

```html
<div class="truncate">Truncate instead of word wrap</div>
```

### Writing mode

<div class="w-4 h-4 horizontal-tb br bg-neutral-5">
He lay on his armour-like back
</div>

```html
<div class="horizontal-tb">He lay on his armour-like back</div>
```

<div class="w-4 h-4 vertical-lr br bg-neutral-5">
He lay on his armour-like back
</div>

```html
<div class="vertical-lr">He lay on his armour-like back</div>
```

<div class="w-4 h-4 vertical-rl br bg-neutral-5">
He lay on his armour-like back
</div>

```html
<div class="vertical-rl">He lay on his armour-like back</div>
```

### Paragraph

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.

He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.

His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.

```html
<p>
    One morning, when Gregor Samsa woke from troubled dreams, he found himself
    transformed in his bed into a horrible vermin.
</p>
<p>
    He lay on his armour-like back, and if he lifted his head a little he could
    see his brown belly, slightly domed and divided by arches into stiff sections.
    The bedding was hardly able to cover it and seemed ready to slide off any
    moment.
</p>
<p>
    His many legs, pitifully thin compared with the size of the rest of him, waved
    about helplessly as he looked. <q>What's happened to me?</q> he thought. It
    wasn't a dream.
</p>
```

### Indented Paragraph

<div class="indent">
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. <q>What's happened to me?</q> he thought. It wasn't a dream.</p>
</div>

```html
<div class="indent">
    <p>
        One morning, when Gregor Samsa woke from troubled dreams, he found himself
        transformed in his bed into a horrible vermin.
    </p>
    <p>
        He lay on his armour-like back, and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections. The bedding was hardly able to cover it and seemed ready to slide
        off any moment.
    </p>
    <p>
        His many legs, pitifully thin compared with the size of the rest of him,
        waved about helplessly as he looked. <q>What's happened to me?</q> he
        thought. It wasn't a dream.
    </p>
</div>
```

### Horizontal ruler

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.

---

He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.

```html
<p>
    One morning, when Gregor Samsa woke from troubled dreams, he found himself
    transformed in his bed into a horrible vermin.
</p>
<hr />
<p>
    He lay on his armour-like back, and if he lifted his head a little he could
    see his brown belly, slightly domed and divided by arches into stiff sections.
    The bedding was hardly able to cover it and seemed ready to slide off any
    moment.
</p>
```

Configure the displayed symbols with:

```css
:root {
    --hr-content: "·\0000a0\0000a0\0000a0\0000a0·\0000a0\0000a0\0000a0\0000a0·";
}
```

### Blockquote

<blockquote>
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
<footer>Franz Kafka, <cite>The Metamorphosis</cite></footer>
</blockquote>

```html
<blockquote>
    <p>
        One morning, when Gregor Samsa woke from troubled dreams, he found himself
        transformed in his bed into a horrible vermin.
    </p>
    <p>
        He lay on his armour-like back, and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.
    </p>
    <footer>Franz Kafka, <cite>The Metamorphosis</cite></footer>
</blockquote>
```

## Lists

### Timeline

<dl class="timeline">
<dt>One morning</dt>
<dd>when Gregor Samsa woke from troubled dreams, he found himself 
transformed in his bed into a horrible vermin.</dd>
<dt>He lay on his armour-like back</dt>
<dd>and if he lifted his head a little he could see his brown belly,
slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover
it and seemed ready to slide off any moment.</dd>
<dt>His many legs</dt>
<dd>pitifully thin compared with the size of the rest of him, waved about helplessly
as he looked. <span class="quote">What's happened to me?</span> he thought. It wasn't a dream.
</dd>
<dt>His room</dt>
<dd>a proper human room although a little too small, lay peacefully between its four
familiar walls.</dd>
</dl>

```html
<dl class="timeline">
    <dt>One morning</dt>
    <dd>when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</dd>
    <dt>He lay on his armour-like back</dt>
    <dd>and if he lifted his head a little he could see his brown belly,
        slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover
        it and seemed ready to slide off any moment.</dd>
    <dt>His many legs</dt>
    <dd>pitifully thin compared with the size of the rest of him, waved about helplessly
        as he looked. <span class="quote">What's happened to me?</span> he thought. It wasn't a dream.
    </dd>
    <dt>His room</dt>
    <dd>a proper human room although a little too small, lay peacefully between its four
        familiar walls.</dd>
</dl>
```

## Tables

## Figures

## Images

## Colors

<table class="code noso">
    <tr class="center">
        <th class="below-rg:hide"></th>
        <th class="normal w-1">d5</th>
        <th class="normal w-1">d4</th>
        <th class="normal w-1">d3</th>
        <th class="normal w-1">d2</th>
        <th class="normal w-1">d1</th>
        <th class="normal w-1"></th>
        <th class="normal w-1">1</th>
        <th class="normal w-1">2</th>
        <th class="normal w-1">3</th>
        <th class="normal w-1">4</th>
        <th class="normal w-1">5</th>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.neutral </th>
        <td class="bg-neutral-d5"></td>
        <td class="bg-neutral-d4"></td>
        <td class="bg-neutral-d3"></td>
        <td class="bg-neutral-d2"></td>
        <td class="bg-neutral-d1"></td>
        <td class="bg-neutral"></td>
        <td class="bg-neutral-1"></td>
        <td class="bg-neutral-2"></td>
        <td class="bg-neutral-3"></td>
        <td class="bg-neutral-4"></td>
        <td class="bg-neutral-5"></td>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.primary </th>
        <td class="bg-primary-d5"></td>
        <td class="bg-primary-d4"></td>
        <td class="bg-primary-d3"></td>
        <td class="bg-primary-d2"></td>
        <td class="bg-primary-d1"></td>
        <td class="bg-primary"></td>
        <td class="bg-primary-1"></td>
        <td class="bg-primary-2"></td>
        <td class="bg-primary-3"></td>
        <td class="bg-primary-4"></td>
        <td class="bg-primary-5"></td>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.accent-one </th>
        <td class="bg-accent-one-d5"></td>
        <td class="bg-accent-one-d4"></td>
        <td class="bg-accent-one-d3"></td>
        <td class="bg-accent-one-d2"></td>
        <td class="bg-accent-one-d1"></td>
        <td class="bg-accent-one"></td>
        <td class="bg-accent-one-1"></td>
        <td class="bg-accent-one-2"></td>
        <td class="bg-accent-one-3"></td>
        <td class="bg-accent-one-4"></td>
        <td class="bg-accent-one-5"></td>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.accent-two </th>
        <td class="bg-accent-two-d5"></td>
        <td class="bg-accent-two-d4"></td>
        <td class="bg-accent-two-d3"></td>
        <td class="bg-accent-two-d2"></td>
        <td class="bg-accent-two-d1"></td>
        <td class="bg-accent-two"></td>
        <td class="bg-accent-two-1"></td>
        <td class="bg-accent-two-2"></td>
        <td class="bg-accent-two-3"></td>
        <td class="bg-accent-two-4"></td>
        <td class="bg-accent-two-5"></td>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.accent-three </th>
        <td class="bg-accent-three-d5"></td>
        <td class="bg-accent-three-d4"></td>
        <td class="bg-accent-three-d3"></td>
        <td class="bg-accent-three-d2"></td>
        <td class="bg-accent-three-d1"></td>
        <td class="bg-accent-three"></td>
        <td class="bg-accent-three-1"></td>
        <td class="bg-accent-three-2"></td>
        <td class="bg-accent-three-3"></td>
        <td class="bg-accent-three-4"></td>
        <td class="bg-accent-three-5"></td>
    </tr>
    <tr>
        <th class="middle normal below-rg:hide">.accent-four</th>
        <td class="bg-accent-four-d5"></td>
        <td class="bg-accent-four-d4"></td>
        <td class="bg-accent-four-d3"></td>
        <td class="bg-accent-four-d2"></td>
        <td class="bg-accent-four-d1"></td>
        <td class="bg-accent-four"></td>
        <td class="bg-accent-four-1"></td>
        <td class="bg-accent-four-2"></td>
        <td class="bg-accent-four-3"></td>
        <td class="bg-accent-four-4"></td>
        <td class="bg-accent-four-5"></td>
    </tr>
 <tr>
        <th class="middle normal below-rg:hide">.accent-five</th>
        <td class="bg-accent-five-d5"></td>
        <td class="bg-accent-five-d4"></td>
        <td class="bg-accent-five-d3"></td>
        <td class="bg-accent-five-d2"></td>
        <td class="bg-accent-five-d1"></td>
        <td class="bg-accent-five"></td>
        <td class="bg-accent-five-1"></td>
        <td class="bg-accent-five-2"></td>
        <td class="bg-accent-five-3"></td>
        <td class="bg-accent-five-4"></td>
        <td class="bg-accent-five-5"></td>
    </tr>    
</table>

## Layout

## Forms

<button>A button</button>
