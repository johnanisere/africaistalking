'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sendMessage = function sendMessage(username, message, to, apikey, from) {
    return fetch('https://africaistalking.herokuapp.com/api/sms', {
        method: 'Post',
        headers: { apikey: apikey, 'Content-Type': "Application/json" },
        body: JSON.stringify({ username: username, to: to, message: message, from: from })
    }).then(function (res) {
        return res.json();
    });
};

exports.default = sendMessage;