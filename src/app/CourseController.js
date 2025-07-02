const Course = require("./models/Course"); // Sửa đường dẫn ở đây nếu cần
const { mongooseToObject } = require("../util/mongoose");
class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // [GET gửi yêu cầu lấy dữ liệu] /courses/:create
  create(req, res, next) {
    // Course.findOne({ slug: req.params.slug });
    res.render("courses/create");
  }
  // [POST: gửi yêu cầu thêm tài nguyên] /courses/:store
  store(req, res, next) {
    //res.json(req.body);
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq…`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/courses/${course.slug}"))
      .catch((error) => {});
  }
}

module.exports = new CourseController();
