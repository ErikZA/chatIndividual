var express = require('express');
var router = express.Router();

/* GET login listing. */
router.get('/chat/:name', function (req, res, next) {
  if(req.params.name === req.cookies.login){
  res.render('chat', { title: 'Chat' + ' ' + req.params.name, nameUser: req.params.name });
  return;
  }else{
  res.redirect('/login');
  }
});

/* POST exit. */
router.post('/exit', function (req, res, next) {
  res.clearCookie('login',req.cookies.login);
  res.redirect('/login/' + 'exit');
});


router.get('/listPeople', function (req, res, next) {
  var path = require('path') 
  var options = {
    root: path.resolve("/Users/erik_/desktop/chatIndividual"),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = '/views/listPeople.hbs';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log('Sent:', err);
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
 });

/* POST Users. */
router.post('/list', function (req, res, next) {
  var name = req.body.name;
  switch (name) {
    case '': case null: case undefined: {
      require('../db').getUser(name, function (docs) {
        var context = {
          people: [
            { name: 'User', lastName: 'not found' },
          ]
        };
        res.json(context.people);
      });
      break;
    };
    default: {
      require('../db').getUser(name, function (docs) {
        res.json(docs);
      });
      break;
    };
  };
});



module.exports = router;
