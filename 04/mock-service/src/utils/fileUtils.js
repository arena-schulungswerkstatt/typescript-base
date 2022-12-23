const fs = require('fs')

function saveToFile(obj) {
    if (!fs.existsSync('./target')) {
        fs.mkdirSync('./target');
    }
    fs.writeFileSync('./target/data.json', JSON.stringify(obj, null, 2), 'utf-8')
}

function getObject() {
    if (!fs.existsSync('./target/data.json')) {
        return {};
    }
    const objString = fs.readFileSync('./target/data.json', {encoding: 'utf8', flag:'r'});
    return JSON.parse(objString);
}

module.exports = {saveToFile, getObject}