const { exec } = require('child_process');
const fs = require('fs');
module.exports = function createTplp(options) {
    const cwd = options.cwd || options.cwd();
    return new Promise((resolve, reject) => {
        exec("git clone https://github.com/amies0919/tua-fe-tpl.git",function(err, stdout, stderr){
            if(err) reject({code: '-1'})
            fs.rename('tua-fe-tpl', cwd, function(err){
                if(err){
                  exec('rm -rf tua-fe-tpl');
                  reject({code: '-2'})
                }
                resolve({ code: '1' })
            });
        });
  });
};
