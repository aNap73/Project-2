/* Dependencies */

/* Routes */
var path = require("path");
var passport = require("../config/passport");
var db = require("../models");
module.exports = function(app){



 

  app.post("/api/login" ,passport.authenticate("local"), function(req , res){  
      res.json({route:"/"});
      }       
  );
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  /* Post Route for new post/articles */

  /* Put Route for editting existing post */

}