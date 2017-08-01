var fs = require('fs');

module.exports = function DirHandler(dir) {

    if (!dir) return;

    fs.stat(dir, function (err, stats) {

        if (err) {
            fs.mkdirSync(dir)
        }
    })

};