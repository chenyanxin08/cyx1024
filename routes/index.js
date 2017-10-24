var express = require('express');
var router = express.Router();
var fs = require('fs');
var db=0;
var db1=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  dt++;
  fs.readFile('public/cyx.txt','utf-8',function(err,data){
    if (err) {
      console.log(err)
    } else{
      console.log(data);
      fs.writeFile('public/cyx.txt','index页面被访问的次数：'+db,function(err){
        if(err){
          console.log(err)
        }
      });
      res.render('index', { title: data});
    }
  })

});

router.get('/aaa', function(req, res, next) {
  dt2++;
  fs.readFile('public/cyx1.txt','utf-8',function(err,data){
    if (err) {
      console.log(err)
    } else{
      console.log(data);
      fs.writeFile('public/cyx1.txt','cyx页面:'+db1,function(err){
        if(err){
          console.log(err)
        }
      });
      res.render('aaa', { title: data});
    }
  })

});

module.exports = router;