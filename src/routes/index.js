// const newsRouter = require('./news');
const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
function route(app) {
  app.get("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.get("/", siteRouter);
}

module.exports = route;
