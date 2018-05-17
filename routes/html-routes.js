/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");
/* Routes */
module.exports = function(app) {

  var ex = {
    name: "test"
  }

  /* Homepage route */
  app.post("/",passport.authenticate("local"),function(req,res){

  });
  app.get("/" ,function(req , res){  
    res.render("index" , ex);
});

  app.get("/showme" , function(req , res){
    res.json(req.user);
    //res.json(req.user);
  }); 
  
     
  
}