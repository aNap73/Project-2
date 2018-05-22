$(function() {
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPost = {
      title: $("#articleName").val().trim(),
      text: $("#artBody").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/postArticle", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});