// const newsRouter = require('./news');
const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {

    // app.get('/news', (req, res) => {
    //     //res.send('main.hbs')
    //     res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    // // Định tuyến
    // app.get('/', (req, res) => {
    //     //res.send('main.hbs')
    //     res.render('home');
    // });

    // app.get('/search', (req, res) => {
    //     //res.send('main.hbs')
    //     res.render('search');
    // });

}

module.exports = route;