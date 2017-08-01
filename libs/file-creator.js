const dirHandler = require('./directory-handler');
const componentContent = require('./component-content');

module.exports = function FileCreator(component) {

    const componentDir = component.rootDir + '/' + component.dir;

    dirHandler(componentDir, createFile);

    function createFile() {

        for (let key in  component) {
            if (component.hasOwnProperty(key)) {

                let file = component[key];

                if (file.file === undefined) return;

                require('fs').writeFile("./" + componentDir + "/" + file.file, componentContent(key, component), function (err) {

                    if (err) {
                        console.log(err)
                    }
                    console.log("The file was created!");
                });

            }
        }
    }

};