var express = require('express');
var router = express.Router();
const catchErrors = require('../lib/async-error');
/* GET users listing. */
router.get('/', catchErrors(async(req, res, next) =>  {
  res.render('./includes/notice_main');
}));

router.get('/notice_write', catchErrors(async(req, res, next) => {
    res.render('./includes/notice_write');
}));

module.exports = router;
