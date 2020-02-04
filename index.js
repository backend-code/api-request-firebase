import React from 'react';
// import os from 'os';

require('es6-promise').polyfill();
require('isomorphic-fetch');
const ApiResponseJson = require('api-response-json')

export async function POST (url, data) {
   
    const response = await fetch(`${url}`, {
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    return await response;
}

export async function PUT (url, data) {
    const response = await fetch(`${url}`, {
        mode: 'cors',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    return await response;
}

export async function GET (url) {
    const response = await fetch(`${url}`).then(
        function (res) {
            // return ApiResponseJson.ok("get ok!", 200, res)
            return res.json();
        }
    );

    return await response;
}

export async function REMOVE(url) {
    const response = await fetch(`${url}`, {
        mode: 'no-cors',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response;
}