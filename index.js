const fs = require('fs-extra');
const path = require('path');

module.exports = (dirpath, num = 1, name = "subdir") => {
    const dirlist = [];

    for (let i = 0; i < num; i++){
        dirlist.push(path.join(dirpath, `${name}_${i}`));
        fs.mkdirs(dirlist[i], err => {
            if(err) throw err;
        });
    }

    return dirlist;
}
