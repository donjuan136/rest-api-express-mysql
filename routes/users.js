var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Hello ini adalah respon pertama');
});

//menggunakan arrow function
// http://localhost:3000/users/profile
router.get('/profile', (req, res)=>{
  res.send(200)
})

//coba membuat routing baru dengan nilai .env
router.get('/env',(req, res)=>{
  res.send(process.env.PRINT_ENV)
})
module.exports = router;
