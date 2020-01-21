var fs = require('file-system');

const INDEX_PATH = 'index.html';
const PACKAGE_PATH = 'package.json';
const VERSION_PATTERN = /<span id="version">.*<\/span>/;


var index = fs.readFileSync(INDEX_PATH, 'utf8');
var package = fs.readFileSync(PACKAGE_PATH, 'utf8');

if (index && package) {
    var npmConfig = JSON.parse(package);
    index = index.replace(VERSION_PATTERN, '<span id="version">v' + npmConfig.version + '</span>');

    fs.writeFileSync(INDEX_PATH, index, 'utf8');
} else {
    console.error('No index file found to populate version information');
}


