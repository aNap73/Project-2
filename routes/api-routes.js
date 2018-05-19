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
  app.post("/api/register/",  function(req , res){
    //IF INCOMING DATA GOOD
    console.log('INCOMING REG REQUEST');
    if(req.body.email&&req.body.password){
      console.log('REGISTER: ', req.body.email );
      //LOOK UP USER BY EMAIL
      
      db.users.findOne({
        where: {
          email: req.body.email
        }
      }).then(function(data) {
        if(!data){

        //} 
        //if (data.email.toString()!==req.body.email.toString()) {
          //IF NOT EXISTS
          //GENERATE NEW onBoardId
          let newOnBoardId = Math.floor(Math.random()*999999);
          //GENERATE NEW USER WITH EMAIL AND onBoardId
          db.users.create({
            email: req.body.email,
            password: req.body.password,
            onBoardId: newOnBoardId,
            userImage:'https://anap73.github.io/Bootstrap-Portfolio.github.io/assets/images/AntMeHead.png'
            }).then(function(outdata){
               
            
              //SEND EMAIL WIH link to should be set to .get <ourpage>/finalizeRegistration/email:/onBoardId:    
              //INDICATE SUCCESS
              res.json({route:"/register/success"});
            });
        }else{
          if(!data.hasEmailConfirmed){
            res.json({route:"/register/founduser"});
          }else
            {
              console.log('data.onBoardId should be populated: ', data.onBoardId);
              console.log('data.email should be populated: ', data.email);
              //
              //SEND EMAIL WIH link to should be set to .get <ourpage>/finalizeRegistration/email:/onBoardId:    
              //INDICATE SUCCESS        
              res.json({route:"/register/success"});
            }
          
        }        
      });     
    }
      else{
        res.json({route:"/register/fail"});
    }

    
   
   
          
    //IF EXISTS
    // hasEmailConfirmed:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false        
    // },
    // hasAcceptedTerms:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // },
    // hasAdmin:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // }, 
    // hasContent:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // },
    // hasPost:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // },      
    // hasBan:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false      }
    // }
    // );
   
    
    }       
);

  /* Post Route for new post/articles */

  /* Put Route for editting existing post */

}