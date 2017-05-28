const webpack = require('webpack');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

let wp = webpack({
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new WriteFilePlugin(),
    ],
});

wp.run((err, stats) => {
    console.log(err, stats);
});