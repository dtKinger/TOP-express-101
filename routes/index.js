var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', links: [{"page": 'Contact', url: '/contact-us'}, {page: "About Us", url: "/about"}]});
});

router.get('/about', (req, res, next) => {
  res.render('index', {title: 'About Us'})
})

module.exports = router;
