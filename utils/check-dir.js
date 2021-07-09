const fs = require('fs');
const chalk = require('chalk');

module.exports = function (dir, name) {
  let isExists = fs.existsSync(dir);
  if(isExists) {
    console.log(chalk.red(`${name}文件已存在，请换一个项目名`));
    process.exit(1)
  }
}
