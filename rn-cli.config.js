var path = require("path");
let config = {
    getProjectRoots() {
        return [path.resolve("node_modules"), path.resolve("src")];
    },
};
module.exports = config;