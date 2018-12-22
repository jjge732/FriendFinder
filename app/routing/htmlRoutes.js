const path = require('path');


module.exports = app => {
    app.get('/survey', (req, res) => {
        // res.sendFile(path.join(__dirname, '../public/survey.html'));
        if (app.locals.name) {
            res.render('survey', {friendName: app.locals.name});
        } else {
            res.render('survey', {});
        }
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    });
}