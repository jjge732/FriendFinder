const express = require('express');
const app = express();
const path = require('path');

console.log('he');

app.get('/survey', (req, res) => {
    console.log('here');
    console.log(res.sendFile(path.join(__dirname, '../public/survey.html')));
});

console.log(path.join(__dirname, '../public/survey.html'))

let otherRoutes = app.get('/:catchAll', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});
