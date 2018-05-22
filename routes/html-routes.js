/* Holds all the routes for the html pages */
// var isAuthenticated = require("../config/middleware/isAuthenticated");

/* Bring in dependencies */
var path = require("path");

var passport = require("../config/passport");
var db = require("../models");

/* Routes */
module.exports = function (app) {
   app.get("/autologin/:autoid/:email", function(req,res){
    
    let pageData = {
      happyMonkeys: 'Bill'
    };
    if(req.params.autoid&&req.params.email){
      console.log('AUTOLOG',req.params.autoid,req.params.email)
      db.users.findOne({
        where: {
          email: req.params.email
        }
      }).then(function(data){
         if(data.onBoardId.toString()===req.params.autoid.toString()){
          data.update(
            { hasEmailConfirmed: true,
              hasAcceptedTerms: true,
              onBoardId: null },
            { where:{email: req.params.email}}
          ).then(function(data){
            console.log('before login');
            
            req.login(data.email, function(err) {
              console.log('before redirect');
              let pageData = {
                regInit: {
                  value: true
                }
              };
              pageData.happyMonkeys = 'Bill Logged in';
              pageData.name = data.email;
              pageData.userObj = data;
              res.render("index", pageData);
              return;  
            });
          });
         }
      });
    } 
    
    
   });
   app.get("/register", function (req, res) {

    let pageData = {
      regInit: {
        value: true
      }
    };
    res.render("register", pageData);
  });
  app.get("/register/:regCode/", function (req, res) {
    // console.log('regCodeIn: ', req.params.regCode);
    // console.log('req.query.emailaddy', req.query.emailaddy);
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
          
          //check 4 email
          if (req.query.emailaddy) {

            //get user record
            db.users.findOne({
              where: {
                email: req.query.emailaddy
              }
            }).then(function (data) {
              if (data) {
                //if code matches update user record to hasEmailValidated  
                if (data.onBoardId.toString() === req.params.regCode.toString()) {
                  data.update(
                    { hasEmailConfirmed: true },
                    { where:{email: data.email}}
                  ).then(function(data){
                    let pageData2 = {
                      email: req.query.emailaddy,
                      autosecid: req.params.regCode  
                    };                    
                    console.log('rendering eula', pageData2);
                    res.render("eula", pageData2);
                    return;
                  });
                  } else {
                    pageData.regFail = {
                      value: true
                    };
                    res.render("register", pageData);
                    return;
                  };
                } else {
                pageData.regFail = {
                  value: true
                };
                res.render("register", pageData);
                return;
              }
            })
          } else {
            res.render("register", pageData);
            return;
          }
          
      }
    }
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
  // app.get("*", function (req, res) {
  //   let pageData = {};
  //   pageData = {
  //     happyMonkeys: 'Bill'
  //   };

  //   if (req.user) {
  //     pageData.happyMonkeys = 'Bill Logged in';
  //     pageData.name = req.user.email;
  //     pageData.userObj = req.user;
  //   }
  //   res.render("index", pageData);
  // });
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


        pageData[0].name = req.user.email;
        pageData[0].userObj = req.user;
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
            comments: commentText
          }]

          if(req.user){
            commentData[0].email = req.user.email
          }

          res.render("index", {
            articles: pageData,
            commentsObj: commentData,
            userObj: req.user
          });

          // res.json(pageData);
        }
      })
    })



  });



}