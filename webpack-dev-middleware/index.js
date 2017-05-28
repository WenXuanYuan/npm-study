const Koa = require('koa');
const path = require('path');
const app = new Koa();
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

app.use(webpackMiddleware(webpack({
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    }
}), {
    noInfo: false,
    quiet: false,
    lazy: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    publicPath: '/assets/',
    index: 'index.html',
    headers: {
        'X-Custom-Header': 'yes',
    },
    stats: {
        colors: true,
    },
    reporter: null,
    serverSideRender: false,
}));

app.use(ctx => {
    const assetsByChunkName = ctx.res.locals.webpackStats.toJson().assetsByChunkName;
    console.log(assetsByChunkName);

    ctx.body = `
        <html>
          <head>
            <title>webpack dev middleware</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
    `;
});

app.listen(3001);
console.log('server running at port 3001');
