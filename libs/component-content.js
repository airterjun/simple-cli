module.exports = function content(key, options) {

    let content = '';

    switch (key) {
        case 'component' :
            content = ComponentContent(options);
            break;

        case 'style' :
            content = ':host{}';
            break;

        case 'template' :
            content = 'Awesome Angular!';
            break;

        case 'module' :
            content = ModuleContent(options);
            break;
    }


    return content;
};


function ComponentContent(options) {

    let content = '';

    content += "import { Component } from '@angular/core'\n\n";

    /*
     * Component directive
     */
    content += "@Component({ \n";

    /**
     * If has selector define
     */
    if (options.selector) {
        content += 'selector: "' + options.component.selector + '",';
    }


    content += "templateUrl: './" + options.template.file + "',\n";
    content += "styleUrls: ['./" + options.style.file + "']\n";


    /**
     * End of component directive
     * @type {string}
     */
    content += "\n})\n\n";

    content += "export class " + options.component.className + " { \n constructor(){} \n}";


    return content;

}


function ModuleContent(options) {

    let content = '';

    content += "import { NgModule } from '@angular/core'\n";
    content += "import { CommonModule } from '@angular/common'\n\n";
    content += "import { " + options.component.className + " } from './" + options.component.file.replace(".ts", '') + "'\n\n";

    content += '@NgModule({\n';

    content += "imports : [CommonModule],\n";
    content += "exports : [" + options.component.className + "],\n";
    content += "declarations : [" + options.component.className + "],\n";

    content += '\n})\n\n';

    content += "export class " + options.module.className + " { \n constructor(){} \n}";

    return content;

}
