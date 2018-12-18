const express = require('express');

const app = express();

let possibleFriends = [];

app.get('/api/friends', (req, res) => {
    console.log(req);
    res.json(possibleFriends);
});

app.post('/api/friends', (req, res) => {
    possibleFriends.push(req.body.newSurvey);
});