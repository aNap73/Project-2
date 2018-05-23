$(document).ready(function () {
  
  /* AJAX call to get back all Articles on clicking button */
  $("#all-articles").click(function (e) { 

    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/api/get/articles",
      success: function (response) {
  
        //var prettyPrint;
        for(var i = 0; i < response.length; i++){
          console.log(response);
          $(".display").append("Content ID: " + response[i].contentId + "<br/>");
          $(".display").append("Content Type: " + response[i].contentType + "<br/>");
          $(".display").append("Image: " + response[i].contentImage + "<br/>");
          $(".display").append("Title: " + response[i].contentTitle + "<br/>");
          $(".display").append("Content Body: " + response[i].contentText + "<br/>");
          $(".display").append("Live: " + response[i].live + "<br/>");
          $(".display").append("<hr>");
          
        }
        //$(".display").html(prettyPrint);

      },
      error: function (err){
        console.log ("ERROR: " + err);
      }
    });

    
  });

  /* AJAX call to get back all users on clicking button */
  $("#all-users").click(function (e) { 

    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/api/get/users",
      success: function (response) {

        //console.log(response);
        for(var i = 0; i < response.length; i++){
          console.log(response);
          $(".display").append("User ID: " + response[i].userId + "<br/>");
          $(".display").append("User Email: " + response[i].email + "<br/>");
          $(".display").append("Banned? " + response[i].hasBan + "<br/>");
          $(".display").append("<hr>");
        }
      },
      error: function (err){
        console.log("ERROR: " + err);
      }
    });
    
  });

  /* AJAX call to get back all posts on clicking button */
  $("#all-posts").click(function (e) { 

    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/api/get/posts/",
      success: function (response) {
        //console.log(response);
        for(var i = 0; i < response.length; i++){
          console.log(response);
          $(".display").append("Content ID: " + response[i].contentId + "<br/>");
          $(".display").append("Content Body: " + response[i].contentText + "<br/>");
          $(".display").append("Creation Date: " + response[i].createdAt + "<br/>");
          $(".display").append("<hr>");
        }
      },
      error: function (err){
        console.log("ERROR: " + err);
      }
    });
    
  });


});