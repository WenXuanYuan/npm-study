import _ from 'lodash';
// const _ = require('lodash');

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack-dev-server'], ' ');
    console.log(element);
    element.setAttribute('style', `
        color: green;
        background-color: #bbb;
    `);
    return element;
}

document.body.appendChild(component());
