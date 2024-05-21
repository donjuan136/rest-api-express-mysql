var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//membuat response menggunakan JSON dan arrow function
router.get('/json', (req,res)=>{
  res.json({
    message: 'Hai nama saya adalah juan daniel halomoan',
    hallo :"ini adalah data baru"
  })
})

module.exports = router;
