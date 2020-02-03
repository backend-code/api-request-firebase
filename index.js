import React from 'react';
// import os from 'os';

require('es6-promise').polyfill();
require('isomorphic-fetch');
const ApiResponseJson = require('api-response-json')

export const POST = function (url, data) {
   return fetch(`${url}`, {
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then((d) => {
        ApiResponseJson.created("create ok!",201, d)
    }).catch((err) => {
        ApiResponseJson.error('create error', err)
    });
}

export const PUT = function (url, data) {
  return fetch(`${url}`, {
        mode: 'no-cors',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then((d) => {
        ApiResponseJson.ok("update ok!",200, d)
    }).catch((err) => {
        ApiResponseJson.error('update error', err)
    });
}

export const GET = function (url) {
    return fetch(`${url}`).then(
        function (res) {
            ApiResponseJson.ok("get ok!",200, res)
            return res.json();
        }
    ).catch((err) => {
        ApiResponseJson.error('get error', err)
    });
}