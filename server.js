// require("@babel/register")({
//     rootMode: "upward"
// });

// const babel = require("@babel/core");

// babel.transformFileSync("code");
const pug = require('pug');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
// const friends = require('./app/data/friends.js');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('./app/views'));
app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(fileUpload());

const api = require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app, api);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});