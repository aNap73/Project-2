$(document).ready(function () {
  
  $("#all-articles").click(function (e) { 

    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/api/get/articles",
      success: function (response) {
  
        var prettyPrint;
        for(var i = 0; i < response.length; i++){
          console.log(response);
          $(".display").append("Content ID: " + response[i].contentId + "<br/>");
          $(".display").append("Image: " + response[i].contentImage + "<br/>");
          $(".display").append("Title: " + response[i].contentTitle + "<br/>");
          $(".display").append("Content Type: " + response[i].contentType + "<br/>");
        }
        //$(".display").html(prettyPrint);

      },
      error: function (err){
        console.log ("ERROR");
      }
    });

    
  });
});