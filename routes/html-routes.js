/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");
/* Routes */
module.exports = function (app) {

<<<<<<< HEAD
  var ex = {
    name: "test"
  }

  app.get("/logintest", function (req, res) {
    res.render("logintest", ex);
  });

  /* Admin Site route */
  app.get("/admin", function (req, res) {
    res.render("admin", ex);
  });

  /* Homepage route */
  app.get("*", function (req, res) {
    res.render("index", ex);
  });
=======
  app.get("/register/", function (req, res) {
    
    let pageData = {regInit:{value:true}};
    res.render("register" , pageData);
  });

  app.get("/register/:regCode", function (req, res) {
    console.log('regCode: ',req.params.regCode);
    let pageData = {};
    if(req.params.regCode){      
      switch(req.params.regCode){
        case 'success':
          pageData.regSuccess={value:true};
          res.render("register" , pageData);  
          break;
        case 'founduser':
          pageData.regFail={value:true};
          pageData.regFoundUser={value:true};
          res.render("register" , pageData);
          break;
        case 'fail':
          pageData.regFail={value:true};
          res.render("register" , pageData);
          break;        
        default:
          pageData.regFail={value:true};
          res.render("register" , pageData);
          break;  
              
      }
      
    }
    //CREATEUPDATE USER by EMAIL with new 
    //
    //SEND EMAIL
    
  });
  app.get("/logout", function (req, res) {
    let pageData = {};
    req.logout();
    res.render("index" , pageData);
  });
  app.get("/login" ,function(req , res){  
    //console.log(req.user);
    let pageData = {};
    res.render("logintmp" , pageData);
  });    
  /* Homepage route */
app.get("*" ,function(req , res){
  let pageData = {};
  if (req.user){
     pageData = {name: req.user.email,
                   userObj: req.user};
    }
    
    res.render("index" , pageData);
});
>>>>>>> 1a80f82acbca67a6c0f2b967463e7e23346a35f9


}