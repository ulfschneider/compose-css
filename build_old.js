var fs = require('fs');

const INDEX_PATH = 'index.html';
const VERSION_PATTERN = /<span id="version">.*<\/span>/;

const SERVE_ULF_CODES_PATH = 'compose.html'
const SERVE_HEADER = '---\nlayout: none\ntitle: Compose CSS\ntag: tool\npermalink: /tools/compose/\nabstract: A composable CSS Toolkit to build fast, maintainable, and responsive websites.\n---\n';
const SERVE_REPLACE_BREAKPOINT_START = '<!--replace breakpoint start-->';
const SERVE_REPLACE_BREAKPOINT_END = '<!--replace breakpoint end-->';
const SERVE_REPLACE_BREAKPOINT = '<div><a href="/blog/tool/" class="no-deco">↰ ulf.codes</a></div><div class="only-when-dynamic"><a href="#top" class="no-deco">↑ Go to top</a></div>';

var index = fs.readFileSync(INDEX_PATH, 'utf8');
var package = require('./package.json');

if (index && package) {

    index = index.replace(VERSION_PATTERN, '<span id="version">v' + package.version + '</span>');
    fs.writeFileSync(INDEX_PATH, index, 'utf8');

    var serve = SERVE_HEADER + index;
    serve = serve.replace(/resources\//g, '/js/');
    serve = serve.replace(/images\//g, '/img/compose/');
    var replaceStart = serve.indexOf(SERVE_REPLACE_BREAKPOINT_START);
    var replaceEnd = serve.indexOf(SERVE_REPLACE_BREAKPOINT_END) + SERVE_REPLACE_BREAKPOINT_END.length;
    serve = serve.substring(0, replaceStart) + SERVE_REPLACE_BREAKPOINT + serve.substring(replaceEnd);
    fs.writeFileSync(SERVE_ULF_CODES_PATH, serve, 'utf8');
} else {
    console.error('No index file found to populate version information');
}