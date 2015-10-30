$(function(){
  $(document).foundation();

  // var thumbnail;
  // var mesh;
  //
  // // Set an event listener on the Choose File field.
  // $('#myThumbnail').bind("change", function(e) {
  //   var files = e.target.files || e.dataTransfer.files;
  //   // Our file var now holds the selected file
  //   thumbnail = files[0];
  // });
  //
  // $('#myMesh').bind("change", function(e) {
  //   var files = e.target.files || e.dataTransfer.files;
  //   // Our file var now holds the selected file
  //   mesh = files[0];
  // });
  //
  //
  // $('#fileUpload').submit(function() {
  //   $(this).ajaxSubmit({
  //        error: function(xhr) {
  //          alert("Upload Failed");
  //        },
  //
  //        success: function(response) {
	//             alert("Uploaded Successfully");
  //        }
  //     });
  //
 // 	    return false;
  // });

  // // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
  // $('#uploadbutton').click(function() {
  //   console.log("UPLOAD");
  //   var name = $('#modelName').val();
  //   console.log(name);
  //   var serverUrl = 'http://localhost:10000/sceneObjects/upload';
  //   // var to_post = new FormData($("#fileUpload")[0]);
  //   // console.log(form);
  //   // var to_post = new FormData(form);
  //   // console.log(test);
  //   var to_post ={
  //     name: name,
  //     thumbnail: thumbnail,
  //     mesh: mesh
  //   }
  //   // console.log(to_post);
  //
  //   $.ajax({
  //     type: "POST",
  //     url: serverUrl,
  //     data: to_post,
  //     // contentType: application/json,
  //     processData: false,
  //     success: function(data) {
  //       alert(data);
  //       console.log("Success sending data");
  //     },
  //     error: function(data) {
  //       var obj = jQuery.parseJSON(data);
  //       alert(obj.error);
  //     }
  //   });
  // });

});
