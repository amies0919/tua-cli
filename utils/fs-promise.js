const fs = require("fs");
const mkdirp = require("mkdirp");
const promisify = require("./promisify");

exports.writeFile = promisify(fs.writeFile);
exports.readdir = promisify(fs.readdir);
exports.mkdirp = promisify(mkdirp);
