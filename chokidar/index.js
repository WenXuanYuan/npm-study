const chokidar = require('chokidar');

chokidar.watch('tmp/', {
    ignored: /.html$/,
}).on('all', (event, path) => {
    console.log(event, path);
});