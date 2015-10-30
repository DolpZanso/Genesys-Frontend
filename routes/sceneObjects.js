var express = require('express');
var multer  = require('multer');

var router = express.Router();
var SceneObject = require('../models/SceneObject');

var upload = multer({ dest: 'uploads/' });

var cpUpload = upload.fields([{ name: 'objThumbnail', maxCount: 1 }, { name: 'objFile', maxCount: 1 }]);

router.post('/upload',cpUpload, function(req, res, next) {

  //TODO: GET request objects from req
  console.log("Printing files");
  console.log(req.files);

});



module.exports = router;
