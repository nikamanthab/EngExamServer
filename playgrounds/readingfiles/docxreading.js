var fs = require('fs');

var output = fs.readFileSync("./Listeningtest1.docx");

console.log(output.toString());