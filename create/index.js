const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
module.exports = function(name) {
    const projectDir = path.join(process.cwd(), name);
    mkdirp(projectDir).then(function(mode) {
        if(mode){
            console.log(`创建${mode}成功`);
            const { template, dir, name: fileName } = require("../generator/package")(name);
            console.log(template);
            fs.writeFile(path.join(projectDir, dir, fileName), template.trim(), function(err){
                if(err) console.error(`创建${fileName}文件失败`);
                else {
                    console.log(`创建${fileName}成功`);
                }
            })
        }else{
            console.log(`创建${name}失败`)
        }
    });
};
