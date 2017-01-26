const express = require('express');
const router = express.Router();
//sets the route to main
router.get('/', function(req, res){
  //render mehod instantiates the index object contains key value pair for naming reference
  res.render('index',{
    pageTitle: 'Home',
    pageID: 'home'
  })
})

module.exports = router
