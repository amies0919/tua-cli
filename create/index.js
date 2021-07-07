const path = require("path");
const fs = require("../utils/fs-promise");
const install = require("../utils/install");
module.exports = async function(name) {
    const projectDir = path.join(process.cwd(), name);
    await fs.mkdirp(projectDir);
    console.log(`创建${name}成功`);
    const { template, dir, name: fileName } = require("../generator/package")(name);
    await fs.writeFile(path.join(projectDir, dir, fileName), template.trim());
    console.log(`创建${fileName}成功`);
    install({cwd: projectDir});
};
