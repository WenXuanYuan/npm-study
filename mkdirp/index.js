let mkdirp = require('mkdirp');

mkdirp(__dirname + '/tmp/foo/bar/baz', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('pow');
    }
});