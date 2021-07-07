const fs = require("fs");
const promisify = require("./promisify");

exports.writeFile = promisify(fs.writeFile);
exports.readdir = promisify(fs.readdir);
