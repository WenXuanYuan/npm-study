const webpack = require('webpack');
const path = require('path');

let wp = webpack({
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
});

wp.run((err, stats) => {
    console.log(err, stats);
});