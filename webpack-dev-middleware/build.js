// this middleware just for express
// for koa: https://github.com/leecade/koa-webpack-middleware
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const config = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-eval-source-map',
};

let compiler = webpack(config);
app.use(webpackMiddleware(compiler, {
    publicPath: '/',
}));

app.listen(3000);
