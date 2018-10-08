var express = require('express');
var router = express.Router();

/* GET login listing. */
router.get('/chat', function (req, res, next) {
  res.render('chat', { title: 'Chat' });
});

/* POST exit. */
router.post('/exit', function (req, res, next) {
  res.render('login', { title: 'Login', sucess: 'Check back often!' });
});

router.post('/listUser', function (req, res, next) {
  var name = req.body.searchUser;
  require('../db').getUser(name, function (docs) {
    res.render('chat', {user: docs});
  });
});



  module.exports = router;
