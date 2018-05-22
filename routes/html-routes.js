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
        happyMonkeys: 'Bill'
      };
      if (req.user.hasAdmin) {
        res.render("admin", pageData);
      } else {
        res.render("index", pageData);
      };
    } else {
      res.render("index", pageData);
    }




  });

  app.get("/api/postArticle", function (req, res) {
    res.render("postArticle")
  })

  /* Homepage route */
  app.get("*", function (req, res) {
    let pageData = {};
    let commentData = {};

    db.contents.findAll({
      where: {
        contentType: "ARTICLE"
      }
    }).then(function (data) {

      for (var i = 0; i < data.length; i++) {
        if (data[i].contentType === "ARTICLE") {
          var testText = data[i].contentText;
          var testTit = data[i].contentTitle;
          var type = data[i].contentType;
        }
        
      }
      console.log(data);

      pageData = [{
        mainArticle: data,

        contentType: type,

        contentTitle: testTit,

        contentText: testText,

      }];

    
      if (req.user) {

        pageData = [{
          mainArticle: data,

          contentType: type,

          contentTitle: testTit,

          contentText: testText,

        }];


        pageData.name = req.user.email;
        pageData.userObj = req.user;
      }



      db.contents.findAll({
        where: {
          contentType: "COMMENT"
        }
      }).then(function (outData) {
        if (!outData) {
          console.log("this isnt working! I CANT FIND UR COMMENT DATA");
        } else {
          for (var i = 0; i < outData.length; i++) {

           
          var commentText = outData[i].contentText;
            
          }
           console.log(commentText);
          commentData = [{
            commentsNum: outData,
            comments: commentText,

          }]

          res.render("index", {
            articles: pageData,
            commentsObj: commentData,
          });

          // res.json(pageData);
        }
      })
    })



  });


}