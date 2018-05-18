/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");
/* Routes */
module.exports = function(app) {

  var ex = {
    name: ""
  }
  app.get("/logout", function (req, res) {
    req.logout();
    res.render("index" , ex);
  });
  app.get("/login" ,function(req , res){  
    //console.log(req.user);
    res.render("logintmp" , ex);
  });    
  /* Homepage route */
app.get("*" ,function(req , res){
  let objRender = {};  
  if (req.user){
      objRender = {name: req.user.email,
                   userObj: req.user};
    }else{
      objRender = {name: ''};
    }
    
    res.render("index" , objRender);
});


 
}