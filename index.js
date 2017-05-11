const fs = require('fs-extra');
const path = require('path');

module.exports = (dirpath, num = 1, name = "subdir") => {
    const dirlist = [];
    if(num < 1) return new Error (`add-subdirs(): Second argument must be a number greater than zero`);
    if(typeof(name) !== 'string') return new Error (`add-subdirs(): Third argument must be a string`);
    for (let i = 0; i < num; i++){
        dirlist.push(path.join(dirpath, `${name}_${i}`));
        fs.mkdirs(dirlist[i], err => {
            if(err) throw err;
        });
    }
    return dirlist;
}
