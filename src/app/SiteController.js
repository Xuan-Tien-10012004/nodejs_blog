// const Course = require('../app/models/Course')
// class SiteController {
//     // [GET] /news
//     index(req, res) {

//         res.json({
//             Course.find({}, function (err, courses) {
//                 if (!err) res.json(courses);
//                 res.status(400).json({ error: 'ERROR!' })
//             });từ mongoose v7+ trở lên thì không còn dùng nữa

//         });

//         //res.render('home');
//     }

//     // [GET] /new/:slug
//     search(req, res) {
//         //res.send('main.hbs')
//         res.render('search');
//     }
// }

// module.exports = new SiteController(); // <-- Sửa tại đây
const Course = require("../app/models/Course"); // Sửa đường dẫn ở đây nếu cần
const { mutipleMongooseToObject } = require("../util/mongoose");
class SiteController {
  // [GET] /news
  // async index(req, res) {
  //     try {
  //         const courses = await Course.find({});
  //         res.json(courses);
  //     } catch (err) {
  //         res.status(400).json({ error: 'ERROR!' });
  //     }
  // }
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
    //Phương thức promise: chọc vào database và render ra cái view home
  }

  // [GET] /news/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
