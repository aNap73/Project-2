/* Dependencies */

/* Routes */
var path = require("path");
var passport = require("../config/passport");
var db = require("../models");
module.exports = function(app){
  app.post("/login" ,function(req , res){  
    //res.render("index" , ex);
    if(req.body.email){
      console.log(req.body.email);
    }
    console.log(req.body.email);
    res.json({email:notreal});
  });

  /* Post Route for new post/articles */

  /* Put Route for editting existing post */

}