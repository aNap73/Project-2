//import bcrypt from 'bcrypt-nodejs'
//require('sequelize-isunique-validator')(Sequelize)
//const bcrypt = require("bcrypt");
var bcrypt = require("bcrypt-nodejs");
module.exports = function (sequelize , DataTypes){
  var users = sequelize.define("users" , {
    userId:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      unique: true
    },
    password:{
      type: DataTypes.STRING
    },
    onBoardId:{
      type: DataTypes.INTEGER
    },
    userImage:{
      type: DataTypes.STRING
    },
    hasEmailConfirmed:{
      type: DataTypes.BOOLEAN,
      defaultValue: false        
    },
    hasAcceptedTerms:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hasAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }, 
    hasContent:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hasPost:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },      
    hasBan:{
      type: DataTypes.BOOLEAN,
      defaultValue: false      }
    }
    );
    
    users.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    users.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

  return users;
}

    
      
    
  
  
