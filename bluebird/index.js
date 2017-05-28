let P = require('bluebird');

// new Promise(function(function resolve, function reject) resolver) -> Promise
let p = new P((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('success');
    }
    reject('fail');
});

p.then((result) => {
    console.log('result', result);
}, (error) => {
    console.log('error', error);
});
