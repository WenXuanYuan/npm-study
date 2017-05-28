const webpackServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        app: ['./app.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-eval-source-map',
};

let server = new webpackServer(webpack(config), {
    compress: true,
});

server.listen(3000, '127.0.0.1');
// 'webpack-dev-server/client?http://localhost:3001/',

/**
 * webpack
 */
// let compiler = webpack(config);
// compiler.run((err, stats) => {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('build success');
//     }
// });

