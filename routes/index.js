var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");
const Books = require('../models/book')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', links: [{"page": 'Contact', url: '/contact-us'}, {page: "About Us", url: "/about"}]});
});

router.get( "/catalog", asyncHandler(async (req, res, next) => {
    const successfulResult = await Books.find({}).exec();
    res.render("catalog", { title: "All Books", list: successfulResult });
  }),
);

// Playing with req.params and URL parameters
router.get('/:user_id/*/:name', function (req, res, next) {
  res.send(req.params)
})

router.get('/about', (req, res, next) => {
  res.render('index', {title: 'About Us'})
})

module.exports = router;
