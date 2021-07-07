const spawn = require("cross-spawn");
module.exports = function install(options) {
    const cwd = options.cwd || options.cwd();
    return new Promise((resolve, reject) => {
        const command = options.isYarn ? "yarn" : "npm";
        const args = ["install", "--save", "--save-exact", "--loglevel", "error"];
        const child = spawn(command, args, { cwd, stdio: ["pipe", process.stdout, process.stderr] });

        child.once("colse", code => {
            if(code!== 0){
                reject({
                    command: `${command} ${args.join(" ")}`
                });
                return
            }
            resolve();
        });
        child.once("error", reject);
    });
};
