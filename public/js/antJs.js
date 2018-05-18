var antJs = {
  alive: 'yes',  
  loginOnClick: function(event) {
    console.log('click!', event);
    antJs.login();
  },
  loginOnKeyUp: function(event){    
    if(event.key==='Enter'){
      console.log('Enter!', event);
      antJs.login();
    }
  },
  login: function()
  {
     
    var newLogin = {
      email: $('#email').val(),
      password: $('#password').val()
    };
   console.log(newLogin);
    // Send the POST request.
    $.ajax("/api/login", {
      type: "POST",
      data: newLogin
    }).then(
      function(data, status) {
        window.location.replace(data);
       
      }
    );
      
  }

}

