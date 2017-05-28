let rimraf = require('rimraf');
rimraf('./tmp/name', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('remove success');
    }
});