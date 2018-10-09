var express = require('express');
var router = express.Router();

var context = {
  people: [ 
    { nameFriend: 'Homer', lastName: 'Simpson' },
    { nameFriend: 'Peter', lastName: 'Griffin' },
    { nameFriend: 'Eric', lastName: 'Cartman' },
    { nameFriend: 'Kenny', lastName: 'McCormick' },
    { nameFriend: 'Bart', lastName: 'Simpson' }
  ]
};

/* GET login listing. */
router.get('/chat', function (req, res, next) {
  res.render('chat', { title: 'Chat', people: context.people });
});

/* POST exit. */
router.post('/exit', function (req, res, next) {
  res.render('login', { title: 'Login', sucess: 'Check back often!' });
});


/* POST Users. */
router.post('/list', function (req, res, next) {
    var name = req.body.name;
    require('../db').getUser(name, function (docs) {res.render('chat', {people: docs});
    }
  );
});



  module.exports = router;
