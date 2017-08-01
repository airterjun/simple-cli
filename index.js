let newComponent = [];
let config = require("./simpler-cli.config.json");
let fs = require('fs');

process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        newComponent.push(val)
    }
});

let newComponentFileName = newComponent.join('');
let newComponentDirName = newComponent.join('-').toLocaleLowerCase();


console.log("Creating component " + newComponentFileName + ' ...');

dirChecker(config.config.componentFolderDir);


function createFiles(dir) {

    fs.stat(config.config.componentFolderDir + '/' + newComponentDirName, (err, stats) = > {

        if(err) {
            return fs.mkdir(config.config.componentFolderDir + '/' + newComponentDirName, function () {
                createFiles(config.config.componentFolderDir + '/' + newComponentDirName)
            });
        }

    }
)
    ;

    for (let type in config.config.filePrefixAndType) {

        if (config.config.filePrefixAndType.hasOwnProperty(type)) {
            let prefix = config.config.filePrefixAndType[type];
            let finalFileName = newComponentFileName + "." + prefix + ".";

            let componentContent = "export class " + newComponentFileName + "Component {}";

            if (type === 'html') {
                componentContent = 'Your component is ready to you';
            }

            else if (type === 'scss' || type === 'css') {
                componentContent = ':host {}';
            }

            else if (type === 'module-ts') {
                type = "ts";
                componentContent = "import { " + newComponentFileName + "Component } from './" + newComponentFileName + ".component'\n";
                componentContent += "import {NgModule} from '@angular/core'\n\n";
                componentContent += '@NgModule({\n exports : [' + newComponentFileName + 'Component],\n declarations: [' + newComponentFileName + 'Component] \n })\n\n';
                componentContent += 'export class ' + newComponentFileName + 'Module {}';
            }

            fs.writeFile((dir ? dir + '/' : '') + finalFileName + type, componentContent, function (err) {

                if (err) {
                    console.log(err)
                }
                console.log("The file was created!");
            });
        }

    }

}

function dirChecker(dir) {
    fs.stat(dir, function (err, stats) {
        if (err) {
            // Directory doesn't exist or something.
            console.log('Folder doesn\'t exist, create folder ' + dir);
            return fs.mkdir(dir, function () {
                createFiles()
            });
        }
        if (!stats.isDirectory()) {
            callback(new Error('temp is not a directory!'));
        } else {
            createFiles();
        }
    });
}

console.log("Done created " + newComponentFileName + '');