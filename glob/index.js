const path = require('path');
const glob = require('glob');

glob('temp/**/*.js', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});

// glob('*.js', {
//     cwd: path.resolve(__dirname, 'temp'),
// }, (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// });