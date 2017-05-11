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

describe('add-subdirs', function() {
    let dirs;
    before(function(){
        fs.emptyDirSync(`${dirPath}`)
        dirs = createDirs(dirPath, 3, 'test');
    });

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

describe('When given illegitimate argument values, add-subdirs() returns an error', function(){

    beforeEach(function(){
        fs.emptyDirSync(`${dirPath}`);
    });

    it('It should return an error if the second argument is a negative number', function(){
        expect(createDirs(dirPath, -3, 'test')).to.be.an('error');
    });

    it('It should return an error if the third argument is not a string', function(){
        expect(createDirs(dirPath, 3, {})).to.be.an('error');
    });
});
