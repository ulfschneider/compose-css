<header class="title mry-2">
<h1>Compose CSS</h1>
<span class="bg-primary neutral-5 pd-d3">Version {{compose-version}}</span>
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
        require("postcss-nested"),
        require("postcss-custom-media"),
        require("postcss-custom-properties")(),
        require("postcss-calc"),
        require("@fullhuman/postcss-purgecss")({
            content: [
                /*decide about the content to search for CSS classes to keep*/
                /*...*/
            ],
            defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [] /*check https://flaviocopes.com/tailwind-setup/ */ ,
        }),
        require("cssnano"),
    ],
};
```

### Notation used in this document

* In flowing text, a CSS class will be denoted with a starting period, for example: <code>.css</code>.
* HTML tags in flowing text are denoted lowercase and with pointing brackets, for example: <code>&lt; strong></code>.
* In formatted code, CSS classes and HTML tags are presented syntactically correct. For example:
    

```html
    <div class="no-wrap">No word wrap in small spaces</div>
```

### Stepping through options

* Many CSS classes of Compose CSS allow to step up and down through multiple options of *the same thing.* For example,  `line-height` can be set with `.lh-d1`,   `.lh`,   `.lh-1`,   `.lh-2`, … ,   `.lh-5`. 
`.lh` stands for *1, the neutral value.* `.lh-d1` stands for *decrease one step down from the neutral value, * while `.lh-1` stands for *increase one step up from the neutral value, * `.lh-2` is *increase two steps up, * and so on. Please refer to [line-height](#line-height) for more details.
Another example is how dark or how light a color is set, like `.primary-d5` , `.primary-d4` , `.primary-d3` , … , `.primary` , `.primary-1` , `.primary-2` , … `.primary-5` , where `.primary` is the neutral primary color tone and `-d1` , `-d2` , … is making it darker, while `-1` , `-2` , … is making it lighter. Please refer to [colors](#colors) for more details. 
* A default value is often represented by a `-default` postfix added to the corresponding CSS class. For example, the default `line-height` that is used by Compose CSS is defined by `.lh-3`, which can also be set by `.lh-default`.

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
                        <ins>Inserted text</ins>
                    </td>
                    <td>
                        <code>&lt;ins></code>, <code>.ins</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="blink">Blinking text</span>
                    </td>
                    <td>
                        <code>.blink</code>
                    </td>
                </tr>
                <tr>
                    <td>
                        Abbreviations (<abbr>Abbr</abbr>)
                    </td>
                    <td>
                        <code>&lt;abbr></code>, <code>.abbr</code>
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
    --size-factor: 1.25;
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
    --base-font-size: 18px;
    --fs: 1rem;
    --fs-default: var(--fs);
    --fs-mono: .95em;
    --large: var(--fs-1);
    --larger: calc(var(--size-factor) * 1em);
    --small: var(--fs-d1);
    --smaller: 0.9em;
    --fs-d1: .9rem;
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

Adjust heading font size and line height with:

```css
:root {
    --fs-h6: var(--fs);
    --fs-h5: var(--fs);
    --fs-h4: var(--fs-1);
    --fs-h3: var(--fs-2);
    --fs-h2: var(--fs-3);
    --fs-h1: var(--fs-7);
    --lh-h6: var(--lh-3);
    --lh-h5: var(--lh-3);
    --lh-h4: var(--lh-2);
    --lh-h3: var(--lh-2);
    --lh-h2: var(--lh-2);
    --lh-h1: var(--lh-1);
}
```

        

### Line height

<table class="mxw-rg">
<tr><th>Line height</th><th>CSS class</th><tr>
                <tr>
                    <td class="lh-d1 brt baseline">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-d1 baseline"><code>.lh-d1</code></td>
                </tr>
                <tr>
                    <td class="lh brt baseline">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh baseline">
                        <code>.lh</code>
                    </td>
                </tr>
                <tr>
                    <td class="lh-1 brt baseline">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-1 baseline"><code>.lh-1</code></td>
                </tr>
                <tr>
                    <td class="lh-2 brt baseline">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-2 baseline"><code>.lh-2</code></td>
                </tr>
                <tr>
                    <td class="lh-3 brt baseline">One morning, when Gregor Samsa woke from troubled
                        dreams, he
                        found himself transformed in his bed into a horrible vermin.</td>
                    <td class="lh-3 baseline">
                        <code class="no-wrap">.lh-3</code>, 
                        <code class="no-wrap">.lh-default</code>
                    </td>
                </tr>
                <tr>
                    <td class="lh-4 brt m brb baseline">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-4 baseline"><code>.lh-4</code></td>
                </tr>
                <tr>
                    <td class="lh-5 brt m brb baseline">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he found himself transformed in his bed into a horrible vermin.
                    </td>
                    <td class="lh-5 baseline"><code>.lh-5</code></td>
                </tr>
            </table>

Adjust line height with: 

```css
:root {
    --space-factor: 1.66;
    --lh: 1;
    --lh-d1: 0.9;
    --lh-3: calc(var(--space-factor) * var(--lh));
    --lh-2: calc((var(--lh-3) - var(--lh)) / 3 * 2 + var(--lh));
    --lh-1: calc((var(--lh-3) - var(--lh)) / 3 + var(--lh));
    --lh-default: var(--lh-3);
    --lh-4: calc((var(--lh-3) - var(--lh)) / 3 * 4 + var(--lh));
    --lh-5: calc((var(--lh-3) - var(--lh)) / 3 * 5 + var(--lh));
}
```

### Rhythm

### Word wrapping

<div class="block br bg-neutral-5 d:bg-neutral-d4  w-3 no-wrap mrr mrt-3">No word wrap in small spaces</div>

```html
<div class="no-wrap w-3">No word wrap in small spaces</div>
```

<div class="block br bg-neutral-5 d:bg-neutral-d4  w-3 wrap-normal mrr mrt-3">Normal word wrap in small spaces</div>

```html
<div class="wrap-normal w-3">Normal word wrap in small spaces</div>
```

<div class="block br bg-neutral-5 d:bg-neutral-d4  w-2 break-word mrr mrt-3">Wrap and break word anywhere</div>

```html
<div class="break-word w-2">Wrap and break word anywhere</div>
```

<div class="block br bg-neutral-5 d:bg-neutral-d4  w-3 truncate mrr mrt-3">
Truncate instead of word wrap
</div>

```html
<div class="truncate w-3">Truncate instead of word wrap</div>
```

### Writing mode

<div class="w-4 h-4 horizontal-tb br bg-neutral-5 d:bg-neutral-d4 mrt-3">
He lay on his armour-like back
</div>

```html
<div class="horizontal-tb w-4 h-4">He lay on his armour-like back</div>
```

<div class="w-4 h-4 vertical-lr br bg-neutral-5 d:bg-neutral-d4 mrt-3">
He lay on his armour-like back
</div>

```html
<div class="vertical-lr w-4 h-4">He lay on his armour-like back</div>
```

<div class="w-4 h-4 vertical-rl br bg-neutral-5 d:bg-neutral-d4 mrt-3">
He lay on his armour-like back
</div>

```html
<div class="vertical-rl w-4 h-4">He lay on his armour-like back</div>
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
<hr>
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
    --hr-content: "*\0000a0\0000a0\0000a0\0000a0*\0000a0\0000a0\0000a0\0000a0*";
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

### Details and Summary

Text above …

<details>
<summary>One morning</summary>
    <p>when Gregor Samsa woke from troubled dreams, he found himself
        transformed in his bed into a horrible vermin.
    </p>
    <p>
        He lay on his armour-like back, and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.
        </p>
        <details>
        <summary>The bedding was hardly able to cover it and seemed ready to slide
        off any moment.
        </summary>
        <p>
        His many legs, pitifully thin compared with the size of the rest of him,
        waved about helplessly as he looked. <q>What's happened to me?</q> he
        thought. It wasn't a dream.
        </p>
        </details>
</details>

… text below.

```html
<details>
    <summary>One morning</summary>
    <p>when Gregor Samsa woke from troubled dreams, he found himself
        transformed in his bed into a horrible vermin.
    </p>
    <p>
        He lay on his armour-like back, and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.
    </p>
    <details>
        <summary>The bedding was hardly able to cover it and seemed ready to slide
            off any moment.
        </summary>
        <p>
            His many legs, pitifully thin compared with the size of the rest of him,
            waved about helplessly as he looked. <q>What's happened to me?</q> he
            thought. It wasn't a dream.
        </p>
    </details>
</details>
```

## Lists

Lists ( `ol` , `ul` ), timelines ( `dl.timeline` ), the `summary` of a `details` section ( `details>summary` ), and outline numbers of heading elements ( `.outline h2` , `.outline h3` , …) can have an *outdent* property that will left-align the first level text of those elements with the text above and below of the list and summary. The left-aligning requires to outdent the order numbers, the bullets, and the summary indication which is only desired if the text has enough left margin. By default the outdent of those elements is deactivated. 

> Activate outdenting by assigning a value to the `--outdent-breakpoint` *and* enclosing the portion of the document that should outdent by assigning the `.outdent` class.

To activate the outdent breakpoint choose a width suitable to your site design. E.g. for a centered layout with a regular center content width ( `--rg-width` ) an `--outdent-breakpoint` could set to the value equal to `--rg-breakpoint` . The initial setting of `9999px` for `--outdent-breakpoint` deactivates outdenting of list elements.

The below example sets the `--outdent-breakpoint` to a value equal to `--rg-breakpoint` .

```css
@custom-media --outdent-breakpoint (min-width: 769px);
```

To avoid outdenting only for certain elements assign the CSS class `.no-outdent` to the element itself ( `ol` , `ul` , `dl.timeline` , `details` , `.outline` ) or to a parent of the element. 

There is another breakpoint `--outdent-outline-breakpoint` which initially is also deactivated. `--outdent-outline-breakpoint` works similar to the `--outdent-breakpoint` except it is only for outlining numbered heading elements like `h2` , `h3` , …. Heading elements that are enclosed in an `.outline` class will be outdented when this breakpoint is fulfilled. Because the outline numbers of headings might take more space the 
`--outdent-outline-breakpoint` will typically be wider than the `--outdent-breakpoint` . It is of course possible to activate only either one of the two `--outdent…` breakpoints.

The below example sets the `--outdent-outline-breakpoint` .

```css
@custom-media --outdent-outline-breakpoint (min-width: 900px);
```

### Unordered list

<div class="outdent">
<ul>
<li><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself
transformed in his bed into a horrible vermin.</p>
</li>
<li>He lay on his armour-like back
    <ul>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
    </ul>
</li>
<li>His many legs</li>
<li>His room</li>
</ul>
</div>

### Indented Unordered List

<ul class="indent">
<li><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself
transformed in his bed into a horrible vermin.</p>
</li>
<li>He lay on his armour-like back
    <ul>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
    </ul>
</li>
<li>His many legs</li>
<li>His room</li>
</ul>


### Ordered List

<div class="outdent">
<ol>
<li><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself
transformed in his bed into a horrible vermin.</p>
</li>
<li>He lay on his armour-like back
    <ol>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
    </ol>
</li>
<li>His many legs</li>
<li>His room</li>
</ol>
</div>

### Indented Ordered List

<ol class="indent">
<li><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself
transformed in his bed into a horrible vermin.</p>
</li>
<li>He lay on his armour-like back
    <ol>
        <li>and if he lifted his head a little he could
        see his brown belly, slightly domed and divided by arches into stiff
        sections.</li>
    </ol>
</li>
<li>His many legs</li>
<li>His room</li>
</ol>

### Definition List

<dl>
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

### Timeline

<dl class="timeline">
<dt>One morning</dt>
<dd>when Gregor Samsa woke from troubled dreams, he found himself 
transformed in his bed into a horrible vermin.</dd>
<dt>He lay on his armour-like back</dt>
<dd>and if he lifted his head a little he could see his brown belly, 
slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover
it and seemed ready to slide off any moment.</dd>
<dt><figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
</figure></dt>
<dt>His many legs</dt>
<dd><p class="framed bg-accent-two neutral-5">pitifully thin compared with the size of the rest of him, waved about helplessly
as he looked. <span class="quote">What's happened to me?</span> he thought. It wasn't a dream.</p>
<figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
</figure>
</dd>
<dt>His room</dt>
<dd>a proper human room although a little too small, lay peacefully between its four
familiar walls.</dd>
</dl>

### Framed Timeline

<dl class="timeline framed">
<dt>One morning</dt>
<dd>when Gregor Samsa woke from troubled dreams, he found himself 
transformed in his bed into a horrible vermin.</dd>
<dt>He lay on his armour-like back</dt>
<dd>and if he lifted his head a little he could see his brown belly, 
slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover
it and seemed ready to slide off any moment.</dd>
<dt blub=":"><figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
</figure></dt>
<dt>His many legs</dt>
<dd><p class="framed">pitifully thin compared with the size of the rest of him, waved about helplessly
as he looked. <span class="quote">What's happened to me?</span> he thought. It wasn't a dream.</p>
<figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
</figure>
</dd>
<dt>His room</dt>
<dd>a proper human room although a little too small, lay peacefully between its four
familiar walls.</dd>
</dl>

### Horizontal Timeline

<dl class="timeline framed row">
<dt>One morning</dt>
<dd>when Gregor Samsa woke from troubled dreams, he found himself 
transformed in his bed into a horrible vermin.</dd>
<dt>He lay on his armour-like back</dt>
<dd><p>and if he lifted his head a little he could see his brown belly, </p>
<p>slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover
it and seemed ready to slide off any moment.</p></dd>
<dt><figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
</figure></dt>
<dt>His many legs</dt>
<dd><p class="framed">pitifully thin compared with the size of the rest of him, waved about helplessly
as he looked. <span class="quote">What's happened to me?</span> he thought. It wasn't a dream.</p>
<figure class="framed">
<img src="images/swan-leroi-unsplash.jpg">
<figcaption>this wasn´t a dream</figcaption>
</figure>
</dd>
<dt><div class="rounded framed">His room</div></dt>
<dd>a proper human room although a little too small, lay peacefully between its four
familiar walls.</dd>
</dl>

```html
<dl class="timeline framed row">
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

<figure class="split-aside-left-reverse">
<img src="images/swan-leroi-unsplash.jpg" style="width:30%">
<figcaption class="bg-accent-one">Caption</figcaption>
</figure>

## Images

## Colors

<table class="noso">
    <thead class="below-md:hide">
        <tr>
            <th class="below-md:hide"></th>
            <th>Neutral</th>
            <th>Primary</th>
            <th>Accent One</th>
            <th>Accent Two</th>
            <th>Accent Three</th>
            <th>Accent Four</th>
            <th>Accent Five</th>
        </tr>
    </thead>
    <tbody>
        <tr class="h-2">
            <td class="below-md:hide">5</td>
            <td class="w-3 bg-neutral-5"></td>
            <td class="w-3 bg-primary-5"></td>
            <td class="w-3 bg-accent-one-5"></td>
            <td class="w-3 bg-accent-two-5"></td>
            <td class="w-3 bg-accent-three-5"></td>
            <td class="w-3 bg-accent-four-5"></td>
            <td class="w-3 bg-accent-five-5"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">4</td>
            <td class="bg-neutral-4"></td>
            <td class="bg-primary-4"></td>
            <td class="bg-accent-one-4"></td>
            <td class="bg-accent-two-4"></td>
            <td class="bg-accent-three-4"></td>
            <td class="bg-accent-four-4"></td>
            <td class="bg-accent-five-4"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">3</td>
            <td class="bg-neutral-3"></td>
            <td class="bg-primary-3"></td>
            <td class="bg-accent-one-3"></td>
            <td class="bg-accent-two-3"></td>
            <td class="bg-accent-three-3"></td>
            <td class="bg-accent-four-3"></td>
            <td class="bg-accent-five-3"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">2</td>
            <td class="bg-neutral-2"></td>
            <td class="bg-primary-2"></td>
            <td class="bg-accent-one-2"></td>
            <td class="bg-accent-two-2"></td>
            <td class="bg-accent-three-2"></td>
            <td class="bg-accent-four-2"></td>
            <td class="bg-accent-five-2"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">1</td>
            <td class="bg-neutral-1"></td>
            <td class="bg-primary-1"></td>
            <td class="bg-accent-one-1"></td>
            <td class="bg-accent-two-1"></td>
            <td class="bg-accent-three-1"></td>
            <td class="bg-accent-four-1"></td>
            <td class="bg-accent-five-1"></td>
        </tr>
        <tr class="h-2 bry brw-d4 br-white">
            <td class="below-md:hide"></td>
            <td class="bg-neutral"></td>
            <td class="bg-primary"></td>
            <td class="bg-accent-one"></td>
            <td class="bg-accent-two"></td>
            <td class="bg-accent-three"></td>
            <td class="bg-accent-four"></td>
            <td class="bg-accent-five"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">d1</td>
            <td class="bg-neutral-d1"></td>
            <td class="bg-primary-d1"></td>
            <td class="bg-accent-one-d1"></td>
            <td class="bg-accent-two-d1"></td>
            <td class="bg-accent-three-d1"></td>
            <td class="bg-accent-four-d1"></td>
            <td class="bg-accent-five-d1"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">d2</td>
            <td class="bg-neutral-d2"></td>
            <td class="bg-primary-d2"></td>
            <td class="bg-accent-one-d2"></td>
            <td class="bg-accent-two-d2"></td>
            <td class="bg-accent-three-d2"></td>
            <td class="bg-accent-four-d2"></td>
            <td class="bg-accent-five-d2"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">d3</td>
            <td class="bg-neutral-d3"></td>
            <td class="bg-primary-d3"></td>
            <td class="bg-accent-one-d3"></td>
            <td class="bg-accent-two-d3"></td>
            <td class="bg-accent-three-d3"></td>
            <td class="bg-accent-four-d3"></td>
            <td class="bg-accent-five-d3"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">d4</td>
            <td class="bg-neutral-d4"></td>
            <td class="bg-primary-d4"></td>
            <td class="bg-accent-one-d4"></td>
            <td class="bg-accent-two-d4"></td>
            <td class="bg-accent-three-d4"></td>
            <td class="bg-accent-four-d4"></td>
            <td class="bg-accent-five-d4"></td>
        </tr>
        <tr class="h-2">
            <td class="below-md:hide">d5</td>
            <td class="bg-neutral-d5"></td>
            <td class="bg-primary-d5"></td>
            <td class="bg-accent-one-d5"></td>
            <td class="bg-accent-two-d5"></td>
            <td class="bg-accent-three-d5"></td>
            <td class="bg-accent-four-d5"></td>
            <td class="bg-accent-five-d5"></td>
        </tr>
    </tbody>
</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Neutral</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-neutral-5"></td>
            <td class="neutral-5">Text</td>
            <td>.[bg-]neutral-5</td>
            <td id="neutral-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-4"></td>
            <td class="neutral-4">Text</td>
            <td>.[bg-]neutral-4</td>
            <td id="neutral-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-3"></td>
            <td class="neutral-3">Text</td>
            <td>.[bg-]neutral-3</td>
            <td id="neutral-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-2"></td>
            <td class="neutral-2">Text</td>
            <td>.[bg-]neutral-2</td>
            <td id="neutral-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-1"></td>
            <td class="neutral-1">Text</td>
            <td>.[bg-]neutral-1</td>
            <td id="neutral-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-neutral"></td>
            <td class="neutral">Text</td>
            <td>.[bg-]neutral</td>
            <td id="neutral" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-d1"></td>
            <td class="neutral-d1">Text</td>
            <td>.[bg-]neutral-d1</td>
            <td id="neutral-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-d2"></td>
            <td class="neutral-d2">Text</td>
            <td>.[bg-]neutral-d2</td>
            <td id="neutral-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-d3"></td>
            <td class="neutral-d3">Text</td>
            <td>.[bg-]neutral-d3</td>
            <td id="neutral-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-d4"></td>
            <td class="neutral-d4">Text</td>
            <td>.[bg-]neutral-d4</td>
            <td id="neutral-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-neutral-d5"></td>
            <td class="neutral-d5">Text</td>
            <td>.[bg-]neutral-d5</td>
            <td id="neutral-d5" class="hex-color"></td>
        </tr>
    </tbody>
</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Primary</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-primary-5"></td>
            <td class="primary-5">Text</td>
            <td>.[bg-]primary-5</td>
            <td id="primary-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-4"></td>
            <td class="primary-4">Text</td>
            <td>.[bg-]primary-4</td>
            <td id="primary-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-3"></td>
            <td class="primary-3">Text</td>
            <td>.[bg-]primary-3</td>
            <td id="primary-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-2"></td>
            <td class="primary-2">Text</td>
            <td>.[bg-]primary-2</td>
            <td id="primary-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-1"></td>
            <td class="primary-1">Text</td>
            <td>.[bg-]primary-1</td>
            <td id="primary-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-primary"></td>
            <td class="primary">Text</td>
            <td>.[bg-]primary</td>
            <td id="primary" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-d1"></td>
            <td class="primary-d1">Text</td>
            <td>.[bg-]primary-d1</td>
            <td id="primary-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-d2"></td>
            <td class="primary-d2">Text</td>
            <td>.[bg-]primary-d2</td>
            <td id="primary-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-d3"></td>
            <td class="primary-d3">Text</td>
            <td>.[bg-]primary-d3</td>
            <td id="primary-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-d4"></td>
            <td class="primary-d4">Text</td>
            <td>.[bg-]primary-d4</td>
            <td id="primary-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-primary-d5"></td>
            <td class="primary-d5">Text</td>
            <td>.[bg-]primary-d5</td>
            <td id="primary-d5" class="hex-color"></td>
        </tr>
    </tbody>

</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Accent One</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-accent-one-5"></td>
            <td class="accent-one-5">Text</td>
            <td>.[bg-]accent-one-5</td>
            <td id="accent-one-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-4"></td>
            <td class="accent-one-4">Text</td>
            <td>.[bg-]accent-one-4</td>
            <td id="accent-one-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-3"></td>
            <td class="accent-one-3">Text</td>
            <td>.[bg-]accent-one-3</td>
            <td id="accent-one-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-2"></td>
            <td class="accent-one-2">Text</td>
            <td>.[bg-]accent-one-2</td>
            <td id="accent-one-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-1"></td>
            <td class="accent-one-1">Text</td>
            <td>.[bg-]accent-one-1</td>
            <td id="accent-one-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-accent-one"></td>
            <td class="accent-one">Text</td>
            <td>.[bg-]accent-one</td>
            <td id="accent-one" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-d1"></td>
            <td class="accent-one-d1">Text</td>
            <td>.[bg-]accent-one-d1</td>
            <td id="accent-one-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-d2"></td>
            <td class="accent-one-d2">Text</td>
            <td>.[bg-]accent-one-d2</td>
            <td id="accent-one-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-d3"></td>
            <td class="accent-one-d3">Text</td>
            <td>.[bg-]accent-one-d3</td>
            <td id="accent-one-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-d4"></td>
            <td class="accent-one-d4">Text</td>
            <td>.[bg-]accent-one-d4</td>
            <td id="accent-one-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-one-d5"></td>
            <td class="accent-one-d5">Text</td>
            <td>.[bg-]accent-one-d5</td>
            <td id="accent-one-d5" class="hex-color"></td>
        </tr>
    </tbody>
</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Accent Two</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-accent-two-5"></td>
            <td class="accent-two-5">Text</td>
            <td>.[bg-]accent-two-5</td>
            <td id="accent-two-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-4"></td>
            <td class="accent-two-4">Text</td>
            <td>.[bg-]accent-two-4</td>
            <td id="accent-two-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-3"></td>
            <td class="accent-two-3">Text</td>
            <td>.[bg-]accent-two-3</td>
            <td id="accent-two-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-2"></td>
            <td class="accent-two-2">Text</td>
            <td>.[bg-]accent-two-2</td>
            <td id="accent-two-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-1"></td>
            <td class="accent-two-1">Text</td>
            <td>.[bg-]accent-two-1</td>
            <td id="accent-two-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-accent-two"></td>
            <td class="accent-two">Text</td>
            <td>.[bg-]accent-two</td>
            <td id="accent-two" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-d1"></td>
            <td class="accent-two-d1">Text</td>
            <td>.[bg-]accent-two-d1</td>
            <td id="accent-two-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-d2"></td>
            <td class="accent-two-d2">Text</td>
            <td>.[bg-]accent-two-d2</td>
            <td id="accent-two-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-d3"></td>
            <td class="accent-two-d3">Text</td>
            <td>.[bg-]accent-two-d3</td>
            <td id="accent-two-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-d4"></td>
            <td class="accent-two-d4">Text</td>
            <td>.[bg-]accent-two-d4</td>
            <td id="accent-two-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-two-d5"></td>
            <td class="accent-two-d5">Text</td>
            <td>.[bg-]accent-two-d5</td>
            <td id="accent-two-d5" class="hex-color"></td>
        </tr>
    </tbody>
</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Accent Three</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-accent-three-5"></td>
            <td class="accent-three-5">Text</td>
            <td>.[bg-]accent-three-5</td>
            <td id="accent-three-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-4"></td>
            <td class="accent-three-4">Text</td>
            <td>.[bg-]accent-three-4</td>
            <td id="accent-three-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-3"></td>
            <td class="accent-three-3">Text</td>
            <td>.[bg-]accent-three-3</td>
            <td id="accent-three-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-2"></td>
            <td class="accent-three-2">Text</td>
            <td>.[bg-]accent-three-2</td>
            <td id="accent-three-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-1"></td>
            <td class="accent-three-1">Text</td>
            <td>.[bg-]accent-three-1</td>
            <td id="accent-three-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-accent-three"></td>
            <td class="accent-three">Text</td>
            <td>.[bg-]accent-three</td>
            <td id="accent-three" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-d1"></td>
            <td class="accent-three-d1">Text</td>
            <td>.[bg-]accent-three-d1</td>
            <td id="accent-three-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-d2"></td>
            <td class="accent-three-d2">Text</td>
            <td>.[bg-]accent-three-d2</td>
            <td id="accent-three-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-d3"></td>
            <td class="accent-three-d3">Text</td>
            <td>.[bg-]accent-three-d3</td>
            <td id="accent-three-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-d4"></td>
            <td class="accent-three-d4">Text</td>
            <td>.[bg-]accent-three-d4</td>
            <td id="accent-three-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-three-d5"></td>
            <td class="accent-three-d5">Text</td>
            <td>.[bg-]accent-three-d5</td>
            <td id="accent-three-d5" class="hex-color"></td>
        </tr>
    </tbody>
</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Accent Four</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-accent-four-5"></td>
            <td class="accent-four-5">Text</td>
            <td>.[bg-]accent-four-5</td>
            <td id="accent-four-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-4"></td>
            <td class="accent-four-4">Text</td>
            <td>.[bg-]accent-four-4</td>
            <td id="accent-four-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-3"></td>
            <td class="accent-four-3">Text</td>
            <td>.[bg-]accent-four-3</td>
            <td id="accent-four-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-2"></td>
            <td class="accent-four-2">Text</td>
            <td>.[bg-]accent-four-2</td>
            <td id="accent-four-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-1"></td>
            <td class="accent-four-1">Text</td>
            <td>.[bg-]accent-four-1</td>
            <td id="accent-four-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-accent-four"></td>
            <td class="accent-four">Text</td>
            <td>.[bg-]accent-four</td>
            <td id="accent-four" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-d1"></td>
            <td class="accent-four-d1">Text</td>
            <td>.[bg-]accent-four-d1</td>
            <td id="accent-four-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-d2"></td>
            <td class="accent-four-d2">Text</td>
            <td>.[bg-]accent-four-d2</td>
            <td id="accent-four-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-d3"></td>
            <td class="accent-four-d3">Text</td>
            <td>.[bg-]accent-four-d3</td>
            <td id="accent-four-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-d4"></td>
            <td class="accent-four-d4">Text</td>
            <td>.[bg-]accent-four-d4</td>
            <td id="accent-four-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-four-d5"></td>
            <td class="accent-four-d5">Text</td>
            <td>.[bg-]accent-four-d5</td>
            <td id="accent-four-d5" class="hex-color"></td>
        </tr>
    </tbody>

</table>

<table class="noso">
    <thead>
        <tr>
            <th class="w-4">Accent Five</th>
            <th>Text</th>
            <th>CSS Class</th>
            <th>Hex RGB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-accent-five-5"></td>
            <td class="accent-five-5">Text</td>
            <td>.[bg-]accent-five-5</td>
            <td id="accent-five-5" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-4"></td>
            <td class="accent-five-4">Text</td>
            <td>.[bg-]accent-five-4</td>
            <td id="accent-five-4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-3"></td>
            <td class="accent-five-3">Text</td>
            <td>.[bg-]accent-five-3</td>
            <td id="accent-five-3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-2"></td>
            <td class="accent-five-2">Text</td>
            <td>.[bg-]accent-five-2</td>
            <td id="accent-five-2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-1"></td>
            <td class="accent-five-1">Text</td>
            <td>.[bg-]accent-five-1</td>
            <td id="accent-five-1" class="hex-color"></td>
        </tr>
        <tr class="bry brw-d4 br-white">
            <td class="bg-accent-five"></td>
            <td class="accent-five">Text</td>
            <td>.[bg-]accent-five</td>
            <td id="accent-five" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-d1"></td>
            <td class="accent-five-d1">Text</td>
            <td>.[bg-]accent-five-d1</td>
            <td id="accent-five-d1" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-d2"></td>
            <td class="accent-five-d2">Text</td>
            <td>.[bg-]accent-five-d2</td>
            <td id="accent-five-d2" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-d3"></td>
            <td class="accent-five-d3">Text</td>
            <td>.[bg-]accent-five-d3</td>
            <td id="accent-five-d3" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-d4"></td>
            <td class="accent-five-d4">Text</td>
            <td>.[bg-]accent-five-d4</td>
            <td id="accent-five-d4" class="hex-color"></td>
        </tr>
        <tr>
            <td class="bg-accent-five-d5"></td>
            <td class="accent-five-d5">Text</td>
            <td>.[bg-]accent-five-d5</td>
            <td id="accent-five-d5" class="hex-color"></td>
        </tr>
    </tbody>
</table>

<script>

    /* https://stackoverflow.com/a/61479601 */
    function rgbToHex(rgb) {
        return '#' + rgb
            .match(/\d+/g)
            .map(function (x) {
                x = parseInt(x).toString(16);
                return (x.length == 1)
                    ? "0" + x
                    : x;
            })
            .join("");
    }

    addEventListener('load', event => {
        let rgbCells = document.querySelectorAll('td.hex-color');
        for (cell of rgbCells) {
            let row = cell.parentElement;
            let colorCell = row.querySelector('*[class^=bg-]');
            let style = getComputedStyle(colorCell);
            let hex = rgbToHex(style.backgroundColor);
            cell.innerText = hex;
        }
    });
</script>

## Breakpoints

Each breakpoint *can* trigger a change in base font size. The wider the screen, the taller the font size. While the breakpoint widths are measured in <code>px</code>, the other widths are measured in <code>rem</code>. That means, when a breakpoint triggers a change in font size, the <code>rem</code>-based width will automatically change. The <code>rem</code>-based width must not fit into the breakpoint width. For example, if you don´t increase/change font size at certain breakpoints, having <code>rem</code>-based widths exceeding the breakpoint widths doesn´t trigger text layout changes. Configure the settings with the following custom variables:

<table class="hover-rows">
<thead>
<tr><th>Min Breakpoint</th><th>Max Breakpoint</th><th>Breakpoint Width</th><th><code>rem</code>-based Width<th>1 <code>rem</code></th></tr>
</thead>
<tbody>
<tr><td>mi-xs-breakpoint</td><td>mx-xs-breakpoint</td><td>--xs-breakpoint</td><td>--xs-width</td><td>--font-size-xs-breakpoint</td></tr>
<tr><td>mi-sm-breakpoint</td><td>mx-sm-breakpoint</td><td>--sm-breakpoint</td><td>--sm-width</td><td>--font-size-sm-breakpoint</td></tr>
<tr><td>mi-rg-breakpoint</td><td>mx-rg-breakpoint</td><td>--rg-breakpoint</td><td>--rg-width</td><td>--font-size-rg-breakpoint</td></tr>
<tr><td>mi-md-breakpoint</td><td>mx-md-breakpoint</td><td>--rg-breakpoint</td><td>--md-width</td><td>--font-size-md-breakpoint</td></tr>
<tr><td>mi-lg-breakpoint</td><td>mx-lg-breakpoint</td><td>--lg-breakpoint</td><td>--lg-width</td><td>--font-size-lg-breakpoint</td></tr>
</tbody>
</table>

<div class="full-bleed pdx overflow-hidden"> 
    <div class="w-lg-breakpoint mry-2 mrx-auto br bg-neutral-5 d:bg-neutral-d4">
    <span class="pd">.w-lg-breakpoint</span>        
        <div class="w-lg pdx mry mrx-auto bg-primary white">
            <span>.w-lg</span>
        </div>
    </div>
    <div class="w-md-breakpoint mry-2 mrx-auto br bg-neutral-5 d:bg-neutral-d4">
        <span class="pd">.w-md-breakpoint</span>
        <div class="w-md pdx mry mrx-auto bg-primary white">
            <span>.w-md</span>
        </div>
    </div>
    <div class="w-rg-breakpoint mry-2 mrx-auto br bg-neutral-5 d:bg-neutral-d4">
        <span class="pd">.w-rg-breakpoint</span>
        <div class="w-rg pdx mry mrx-auto bg-primary white">
            <span>.w-rg</span>
        </div>
    </div>
    <div class="w-sm-breakpoint mry-2 mrx-auto br bg-neutral-5 d:bg-neutral-d4">
        <span class="pd">.w-sm-breakpoint</span>
        <div class="w-sm pdx mry mrx-auto bg-primary white">
            <span>.w-sm</span>
        </div>
    </div>
    <div class="w-xs-breakpoint mry-2 mrx-auto br bg-neutral-5 d:bg-neutral-d4">
        <span class="pd">.w-xs-breakpoint</span>
        <div class="w-xs pdx mry mrx-auto bg-primary white">
            <span>.w-xs</span>
        </div>
    </div>

</div>

## Layout

## Forms

<form>
<div>
<button class="mry">A button</button>
<button class="mry" disabled>A disabled button</button>
</div>

<fieldset>
<legend>A checkbox and a radio button within a fieldset</legend>
<div>
<label for="ccheck" class="custom-control">
<input id="ccheck" type="checkbox"/>
<span>Hello World</span>
</label>
</div>

<div>
<label for="cradio" class="custom-control">
<input id="cradio" type="radio"/>
<span>Hello World</span>
</label>
</div>
</fieldset>

<div class="mry-vrplus group error">
<label for="text">A text input</label>
<div class="desc">Please provide simple text</div>
<div class="error">Here would be the error message – in case of</div>
<input id="text" type="text" />
</div>

<div class="mry-vrplus group">
<label for="text">A text input</label>
<div class="desc">Please provide simple text</div>
<input id="text" type="text" />
</div>

<div class="mry-vrplus group">
<label for="file">A file upload</label>
<input id="file" type="file" class="block" />
</div>

<div class="mry-vrplus">
<label class="block">A textarea</label>
<textarea></textarea>
</div>
</form>
