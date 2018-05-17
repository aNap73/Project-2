/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");
/* Routes */
module.exports = function (app) {

  var ex = {
    name: "test"
  }

  /* Homepage route */

  app.get("/", function (req, res) {

    db.users.create({
      email: 'napolitano.anthony@yahoo.com',
      password: 'password123',
      onBoardId: 1,
      userImage: 'https://anap73.github.io/Bootstrap-Portfolio.github.io/assets/images/AntMeHead.png'
    }).then(function (outdata) {
      console.log('outdata', outdata.dataValues.password)
      //VALIDPASSWORD EXAMPLE; IF TRUE THEN VALIDATE USER
      console.log('password hash working:', outdata.validPassword('password123'));
      req.login({
        email: 'napolitano.anthony@yahoo.com',
        password: 'password123'
      }, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).json(err);
        }
        res.json(req.user);
      });

    }).catch(err => {
      console.log(err);
    });

  });

}