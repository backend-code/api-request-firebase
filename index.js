import React from 'react';
// import os from 'os';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const POST = function (url, data) {
    fetch(`${url}`, {
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export const PUT = function (url, data) {
    fetch(`${url}`, {
        mode: 'no-cors',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export const GET = function (url) {
    return fetch(`${url}`).then(
        function (res) {
            return res.json();
        }
    )
}