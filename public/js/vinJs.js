$(function() {
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPost = {
      title: $("#articleName").val().trim(),
      text: $("#artBody").val().trim(),
      type: "ARTICLE",
    };

    // Send the POST request.
    $.ajax("/api/postArticle", {
      type: "POST",
      data: newPost
    }).then(
      function(data, status) {
        console.log("created a new post");
        // Reload the page to get the updated list
        window.location.replace("/");
      }
    );
  });
});