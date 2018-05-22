/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");
/* Routes */
module.exports = function (app) {

  app.get("/register", function (req, res) {

    let pageData = {
      regInit: {
        value: true
      }
    };
    res.render("register", pageData);
  });

  app.get("/register/:regCode", function (req, res) {
    console.log('regCode: ', req.params.regCode);
    let pageData = {};
    if (req.params.regCode) {
      switch (req.params.regCode) {
        case 'success':
          pageData.regSuccess = {
            value: true
          };
          res.render("register", pageData);
          break;
        case 'founduser':
          pageData.regFail = {
            value: true
          };
          pageData.regFoundUser = {
            value: true
          };
          res.render("register", pageData);
          break;
        case 'fail':
          pageData.regFail = {
            value: true
          };
          res.render("register", pageData);
          break;
        default:
          pageData.regFail = {
            value: true
          };
          res.render("register", pageData);
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
    res.render("index", pageData);
  });
  app.get("/login", function (req, res) {
    //console.log(req.user);
    let pageData = {};
    res.render("logintmp", pageData);
  });

  /* Admin Site route */
  app.get("/admin", function (req, res) {
    let pageData = {};
    if (req.user) {
      pageData = {
        name: req.user.email,
        userObj: req.user,
        happyMonkeys:'Bill'
      };
      if(req.user.hasAdmin){
        return res.render("admin",pageData);
      }else {
        return res.render("index", pageData);
      };
    }else{
        res.render("index", pageData);
      }    
  });

  /* Homepage route */
  app.get("*", function (req, res) {
    let pageData = {};
    pageData = {
      
      happyMonkeys:'Bill'
    };
    if (req.user) {
      pageData.happyMonkeys= 'Bill Logged in';
      pageData.name = req.user.email;
      pageData.userObj = req.user;
    }
    
    res.render("index", pageData);
  });


}