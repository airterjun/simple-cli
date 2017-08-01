/**
 * @return {string}
 */
function ComponentContent(config) {

    var content = '';

    /*
     * Component directive
     */
    content += "@Component({ \n";


    /**
     * If has selector define
     */
    if (config.selector) {
        content += 'selector: "' + config.selector + '"';
    }


    content += 'templateUrl: ' + config.templateUrl + '"';
    content += 'styleUrls: ["' + config.templateUrl + '"]';


    /**
     * End of component directive
     * @type {string}
     */
    content += "\n})";


    return content;

}


module.exports = ComponentContent(config);