var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signin',ctrlOthers.signin);

router.post('/signin',ctrlOthers.signinUser);

router.get('/signout',ctrlOthers.signout);

module.exports = router;
