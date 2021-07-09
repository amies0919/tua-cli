const path = require("path");
const fs = require("../utils/fs-promise");
const install = require("../utils/install");
const mkdirp = require("mkdirp");
const chalk = require("chalk")
const isExists = require('../utils/check-dir');
const mkdirTplp = require('../utils/mkdir-tpl');

module.exports = async function(name) {
    const projectDir = path.join(process.cwd(), name);
    await isExists(projectDir, name);
    if(false)
      await mkdirp(projectDir);
    if(true){ 
      const isSucess = await mkdirTplp({cwd: projectDir})
      console.log(isSucess);
    };
    console.log(chalk.green(`创建${name}成功`));
    //const { template, dir, name: fileName } = require("../generator/package")(name);
    //await fs.writeFile(path.join(projectDir, dir, fileName), template.trim());
    //console.log(chalk.green(`创建${fileName}成功`));
    install({cwd: projectDir});
};
