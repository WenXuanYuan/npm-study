const babel = require('babel-core');

let a = () => {
    console.log('test');
};

let code = 'a();';
// babel.transform(code, options) // => { code, map, ast }
let result = babel.transform(code);

// console.log(result);
console.log('code', result.code);
console.log('map', result.map);
console.log('ast', result.ast);