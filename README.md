# add-subdirs

Adds sub-directories to a user defined top level directory. An array of the
sub-directory paths is returned.


## Install

```
npm install --save add-subdirs
```

## Usage

```
const addSubdirs = require('add-subdirs');
```
```
const dirs = addSubdirs('/path/to/directory');
```

## API

**addSubdirs(dirpath[, num][, name])**


**dirpath** (required)

Type: `string`

The directory path you want to add your sub-directories to.
<br>

**num** (optional)

Type: `number`

Default: 1

The number of subdirectories you want to add.
<br>

**name**

Type: `string`

Default: 'subdir'

The name of your sub-directories. An underscore character and a number

will be appended to the end of the name to make it unique.
<br>


## License

MIT
