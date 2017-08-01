let dirHandler = require('./directory-handler');
let componentContent = require('./component-content');

module.exports = function FileCreator(component) {

    var componentDir = component.rootDir + '/' + component.dir;

    dirHandler(componentDir);

    for (var key in  component.component) {
        if (component.component.hasOwnProperty(key)) {

            var file = component.component[key];
            fs.writeFile(componentDir + file.file, componentContent(key, component), function (err) {

                if (err) {
                    console.log(err)
                }
                console.log("The file was created!");
            });

        }
    }

};