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

};


function ComponentContent(options) {

    var content = '';

    content = '';

    /*
     * Component directive
     */
    content += "@Component({ \n";


    /**
     * If has selector define
     */
    if (options.selector) {
        content += 'selector: "' + options.component.selector + '"';
    }


    content += "templateUrl: './" + options.template.file + "'";
    content += "styleUrls: ['./" + options.style.file + "']";


    /**
     * End of component directive
     * @type {string}
     */
    content += "\n})";


    return content;

}


function ModuleContent() {

    let content = '';

    content += "import { NgModule } from '@angular/core'\n\n";

    content += '@NgModule({\n';

    content += '';

    content += '\n})';


    return content;

}
