// require("@babel/register");

const babel = require("@babel/core");

babel.transform("code");

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
// const friends = require('./app/data/friends.js');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
app.use(fileUpload());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
