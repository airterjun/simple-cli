const fs = require('fs');

module.exports = function DirHandler(dir, cb) {

    if (!dir) return;

    fs.stat(dir, function (err, stats) {

        if (err) {
            fs.mkdirSync(dir)
        }

        if (cb !== undefined)
            cb()
    })

};