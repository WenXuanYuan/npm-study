const browserSync = require('browser-sync');

let bs = browserSync.create();

bs.init({
    server: './',
});

bs.notify('Compiling, please wait!');

bs.watch('*.(html|css)').on('change', bs.reload);