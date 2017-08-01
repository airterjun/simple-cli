let configJson = require("./simpler-cli.config.json");
const commandHandler = require("./libs/comand-line-handler");
const namingHandler = require("./libs/naming-handler");
const dirHandler = require("./libs/directory-handler");
const fileCreator = require("./libs/file-creator");

let componentProperty = [];
let selectorName = '';

commandHandler(function (val, index, array) {

    if (index > 1 && val.indexOf("selector") === -1) {
        componentProperty.push(val)
    }

    if (val.indexOf("selector") > -1) {
        selectorName = val.split("=")[1];
    }

    console.log(val);
});

console.log(componentProperty);


module.exports = function cli(config) {


    if (config)
        configJson = config;

    let fileNaming = namingHandler(componentProperty, configJson);

    fileNaming.rootDir = configJson.componentDir;
    fileNaming.component.selector = selectorName;

    console.log(configJson.componentDir);

    dirHandler(configJson.componentDir);

    fileCreator(fileNaming);

}