// require("@babel/register");

// const babel = require("@babel/core");

// babel.transform("code", optionsObject);

const express = require('express');
const app = express();
const friends = require('./app/data/friends.js');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
