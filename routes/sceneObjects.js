var express = require('express');

var router = express.Router();
var SceneObject = require('../models/SceneObject');
var multer  = require('multer');

var upload = multer({ dest: 'uploads/' });
var cpUpload = upload.fields([{ name: 'objThumbnail', maxCount: 1 }, { name: 'objFile', maxCount: 1 }]);

router.post('/upload',cpUpload, function(req, res, next) {

  console.log(req.body);
  console.log(req.files);
  
  SceneObject.save(req.body,req.files,function(success){
      if(success){
        res.send('Upload Success');
      }
      else{
        res.send('Upload Failed');
      }
  });



});



module.exports = router;
