const fs = require('fs-extra');
const path = require('path');
const createDirs = require('../index.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
var chaiFiles = require('chai-files');
chai.use(chaiFiles)
const dir = chaiFiles.dir;

const dirPath = './test/tree';
const newDir = 'subdir_0';
let dirs;
let dirsNeg;

before(function(done){
    fs.removeSync(`${dirPath}`);
    fs.ensureDirSync(`${dirPath}`);
    dirs = createDirs(dirPath, 3, 'test');
    done();
});

describe('add-subdirs', function() {

    it(`should return an array`, function(){
        expect(dirs).to.be.an('array');
    });

    it(`should return three items in the array when 3 is passed as the second
        argument`, function(){
        expect(dirs.length).to.equal(3);
    });


    it(`creates a series of sub-diretories in a user-supplied directory`,
        function(){
            expect(dir(dirPath)).to.exist;
            expect(dir(dirPath)).to.not.be.empty;
        }
    );

});
