var express = require('express');
var router = express.Router();
var SceneObject = require('../models/SceneObject');

/* GET home page. */
//router.use(express.static(__dirname + 'public'));
router.get('/', function(req, res, next) {

  SceneObject.all(function(sceneObjects){
    console.log(sceneObjects);
    res.render('model_list', {
      objs: sceneObjects,
      isLogin: true
    });

  });

});


module.exports = router;
