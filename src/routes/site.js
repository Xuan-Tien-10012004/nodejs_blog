//Độc lập cho các file ví dụ như Home, contact,....
const express = require('express');
const router = express.Router();

const siteController = require('../app/SiteController');

//SiteController.index

router.use('/:search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
