"use strict";

// require("@babel/register");
var babel = require("@babel/core");

babel.transform("code", optionsObject);

var express = require('express');

var app = express();

require('./app/routing/apiRoutes')(app);

require('./app/routing/htmlRoutes')(app);

var friends = require('./app/data/friends.js');

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});