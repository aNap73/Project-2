//Please add a .env file with your DBPWD; thx ant


/* Bring in dependencies */


const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
//var passport = require("./config/passport");
var PORT = process.env.PORT || 3000;
var db = require("./models");

/* Setup express */
var app = express();

/* Setup static content */
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));
//app.use(session({ secret: "aint no cat in here man", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

/* Setup express-handlebars */
app.engine("handlebars" , exphbs({ defaultLayout: "main" }));
app.set("view engine" , "handlebars");

/* Models */


/* Add any static directories here */

/* Setup Body Parser */

/* Add routes here */
require("./routes/html-routes.js")(app);


/* Sync database and listen remember to remove the force true when pushing to production */
db.sequelize.sync({ force: true}).then(function(){
  app.listen(PORT , function(){

    db.users.create({
      email:'napolitano.anthony@yahoo.com',
      password:'password123',
      onBoardId:1,
      userImage:'https://anap73.github.io/Bootstrap-Portfolio.github.io/assets/images/AntMeHead.png'
      }).then(function(outdata){
        console.log('outdata',outdata.dataValues.password)
        console.log('match', outdata.validPassword('password123'));
      });
    
    console.log("App listening at http://localhost:" + PORT);
  })
})


