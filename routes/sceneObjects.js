var express = require('express');
var multer  = require('multer');

var router = express.Router();
var SceneObject = require('../models/SceneObject');



router.post('/upload', function(req, res, next) {

  console.log("Printing files");
  console.log(req.files);

});



module.exports = router;
