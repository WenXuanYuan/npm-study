let pathToRegexp = require('path-to-regexp');

function matchURI(path, uri) {
    const keys = [];
    const pattern = pathToRegexp(path, keys);
    const match = pattern.exec(uri);
    if (!match) {
        return null;
    }
    const params = Object.create(null);
    for (let i = 1; i < match.length; i++) {
        params[keys[i - 1].name] = match[i] !== undefined ? match[i] : undefined;
    }
    return params;
}

let path = '/post/:pid/comment/:cid';
let uri = '/post/12/comment/23';

let params = matchURI(path, uri);
console.log(params);