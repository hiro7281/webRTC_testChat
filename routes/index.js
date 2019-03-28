var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const child     = ['/self', '/manual', '/auto'];
  const pageTitle = ['self camera echo',
                     'manual hand shake',
                     'auto hand shake'];
  res.render('index', { title: 'webRTC test', child: child, pageTitle:pageTitle});
});
/* GET camera echo page. */
router.get('/self', function(req, res, next) {
  res.render('self', { title: 'Self Camera' });
});
/* GET manual signal page*/
router.get('/manual', function(req, res, next){
  res.render('manual', {title: 'Manual signal'});
});
/* GET auto signal page*/
router.get('/auto', function(req, res, next){
  res.render('autoConnect', {title: 'Auto signal'});
});
module.exports = router;
