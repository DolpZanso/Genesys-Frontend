$(function(){
  $(document).foundation();

  var thumbnail;
  var mesh;


  $("form#fileUpload").submit(function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);

    jQuery.ajax({
       url: "sceneObjects/upload",
       type: 'POST',
       data: formData,
       cache: false,
       contentType: false,
       processData: false,
       success: function (returndata) {
         alert("Success");
       },
       error: function(){
           alert("error in ajax form submission");
        }
   });

   return false;

  });

  

});
