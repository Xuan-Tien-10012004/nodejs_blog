const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const db = require("./config/db");
//connnect DB
db.connect();
const port = 3000;

const route = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
// Gọi ra localhost:3000/img/logo.webp Đây là static file

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

// Định tuyến
// app.get('/', (req, res) => {
//     //res.send('main.hbs')
//     res.render('home');
// });

// app.get('/news', (req, res) => {
//     //res.send('main.hbs')
//     res.render('news');
// });

// app.get('/search', (req, res) => {
//     //res.send('main.hbs')
//     res.render('search');
// });
// app.post('/search', (req, res) => {
//     //res.send('main.hbs')
//     res.send('');
// });

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
