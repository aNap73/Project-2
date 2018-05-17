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
    // .then(function(outdata){
    //     console.log('outdata',outdata.dataValues.password)
    //    //VALIDPASSWORD EXAMPLE; IF TRUE THEN VALIDATE USER
    //     console.log('password hash working:', outdata.validPassword('password123'));
    //      req.login({email:'napolitano.anthony@yahoo.com', password:'password123'}, function (err) {
    //     if (err) {      
    //       console.log(err);      
    //       return res.status(422).json(err);
    //     }
      
    //     }); 
    //   // //LOGIN EXAMPLE
    //   // req.login({email:'napolitano.anthony@yahoo.com',password:'password123'}, function (err) {
    //   //   if (err) {
          
    //   //     console.log(err)
    //   //     //res.render("index" , ex);
    //   //     return res.status(422).json(err);
    //   //   }
    //   //   console.log('user', req.user);
    //   //   //res.render("index" , ex);
    //   //   //res.json("/members");
    //   // });
  


    //  //SEQUILIZE CHECK         
    
    // });
});

  app.get("/showme" , function(req , res){
    res.json(req.user);
    //res.json(req.user);
  }); 
  
     
    
  
}