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

SceneObject.save = function(sObj,callback){
  Parse.initialize("cBiKoANT0HSLMwNhAqF1nhE0WHqhKwoHo26yLiS5", "hYWlNRdrokbUuxv449hcnJ42glWNOjIgZbI1oSJ9");
  var sceneObject = Parse.Object.extend("SceneObject");
  sceneObject.name = sObj['name'];
  sceneObject.objThumbnail = new Parse.File("thumb.jpg",sObj['thumbnail']);
  sceneObject.objFile = new Parse.File("thumb.jpg",sObj['mesh']);
  console.log(sObj['name']);

  // sceneObject.save(null, {
  //   success: function(sceneObject) {
  //     // Execute any logic that should take place after the object is saved.
  //     alert('New object created with objectId: ' + sceneObject.id);
  //   },
  //   error: function(gameScore, error) {
  //     // Execute any logic that should take place if the save fails.
  //     // error is a Parse.Error with an error code and message.
  //     alert('Failed to create new object, with error code: ' + error.message);
  //   }
  // });

}


module.exports = SceneObject;
