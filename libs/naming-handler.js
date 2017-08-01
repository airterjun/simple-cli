var camelCase = require('./worker-helper');
var config;

module.exports = function NamingHandler(stringsParams, cliConfig) {

    var naming = {};

    if (stringsParams === undefined) return;

    config = stringsParams;

    for (let type in cliConfig.filePrefixAndType) {

        var prefix = cliConfig.filePrefixAndType[type];

        if (type === 'ts') {
            naming.component = ComponentNaming(prefix, type);
        } else if (type === 'scss' || type === 'css') {
            naming.style = StyleNaming(prefix, type);
        } else if (type === 'html') {
            naming.template = TemplateNaming(prefix, type);
        } else if (type === 'module-ts') {
            naming.module = ModuleNaming(prefix, 'ts');
        }

    }

    naming.dir = stringsParams.join('-').toLocaleLowerCase();


    return naming

};


function ComponentNaming(prefix, type) {
    return {
        'file': config.join('-').toLocaleLowerCase() + '.' + prefix + '.' + type,
        'className': camelCase(config.join(' ') + ' ' + prefix).split(' ').join("")
    }
}


function StyleNaming(prefix, type) {
    return {
        'file': config.join('-').toLocaleLowerCase() + '.' + prefix + '.' + type
    };
}

function ModuleNaming(prefix, type) {
    return {
        'file': config.join('-').toLocaleLowerCase() + '.' + prefix + '.' + type,
        'className': camelCase(config.join(' ') + ' ' + prefix).split(' ').join("")
    }
}

function TemplateNaming(prefix, type) {
    return {
        'file': config.join('-').toLocaleLowerCase() + '.' + prefix + '.' + type
    }
}