const express = require('express');
const router = express.Router();
const quotes = require('../data/quotes.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/quote', function (req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({quote: quotes[randomIndex]});
});

module.exports = router;
