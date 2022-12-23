const { jsPDF } = require("jspdf");
const fs = require('fs');
const moment = require("moment");

const doc = new jsPDF();

const dir = './target';
const timestamp = moment().format('YYYYMMDD_HHmmss')

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const print = (text) => {
    doc.text(text, 10, 10);
    doc.save(`${dir}/result_${timestamp}.pdf`);
}

module.exports = {
    print: print
}
