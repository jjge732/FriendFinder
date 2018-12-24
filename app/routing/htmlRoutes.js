module.exports = app => {
    app.get('/survey', (req, res) => {
        if (app.locals.name) {
            res.render('survey', {friendName: app.locals.name});
        } else {
            res.render('survey', {});
        }
    });

    app.get('*', (req, res) => {
        res.render('home', {})
    });
}