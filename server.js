require('babel-core').transform('code', options);

const path = require('path');
const mysql = require('mysql');
const express = require('express');
const app = express();
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');
const friends = require('./app/data/friends.js')

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port : 3307,
    user: 'root',
    password: 'root',
    database: 'friend_finder'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});