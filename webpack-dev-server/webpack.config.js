const path = require('path');

module.exports = {
    entry: {
        app: [ path.resolve(__dirname, 'app.js')],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-eval-source-map',
};