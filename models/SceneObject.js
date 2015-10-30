var Parse = require('parse/node')

var SceneObject = {};

SceneObject.all = function(callback){

  Parse.initialize("cBiKoANT0HSLMwNhAqF1nhE0WHqhKwoHo26yLiS5", "hYWlNRdrokbUuxv449hcnJ42glWNOjIgZbI1oSJ9");
  var SceneObject = Parse.Object.extend("SceneObject");
  var query = new Parse.Query(SceneObject);

  query.find({
    success: function(results) {
        callback(results);
    },
    error: function(error) {
      callback([]);
    }
  });
}

SceneObject.save = function(details,files,callback){

  Parse.initialize("cBiKoANT0HSLMwNhAqF1nhE0WHqhKwoHo26yLiS5", "hYWlNRdrokbUuxv449hcnJ42glWNOjIgZbI1oSJ9");

  var objThumbnail = new Parse.File(files['objThumbnail'][0].originalname,files['objThumbnail']);
  var objFile = new Parse.File(files['objThumbnail'][0].originalname,files['objFile']);

  objThumbnail.save().then(function(){
      objFile.save().then(function(){

        var SceneObject = Parse.Object.extend("SceneObject");
        var sceneObject = new SceneObject();

        sceneObject.set("name",details['modelName']);
        sceneObject.set("objThumbnail",objThumbnail);
        sceneObject.set("objFile",objFile);

        sceneObject.save().then(
          function(object) {
            // the object was saved.
            callback({success:true});
          },
          function(error) {
            // saving the object failed.
            callback({success:false});
        });


      },function(error){
          callback({success:false});
      });
  },function (error) {
    callback({success:false});
  });





}


module.exports = SceneObject;
