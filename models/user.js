//import bcrypt from 'bcrypt-nodejs'
//require('sequelize-isunique-validator')(Sequelize)
//const bcrypt = require("bcrypt");

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
    
    

  return users;
}

    
      
    
  
  
