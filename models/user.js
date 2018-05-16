//import bcrypt from 'bcrypt-nodejs'
//require('sequelize-isunique-validator')(Sequelize)


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
    roleId:{
      type: DataTypes.INTEGER
    },      
    hasBan:{
      type: DataTypes.BOOLEAN,
      defaultValue: false      }
    });      
  return users;
}

    
      
    
  
  



//   Roles {roleId: auto  int(11),

// }
// Users{userId: auto int(11) not null autoid,?????
//    username:String,
//    password: String,
//    email:String,
//    pwd: 1WayHash,?????
//    onboardid: int(11),
//    hasEmailConfirmed: bool,
//    hasAcceptedTerms: bool,
//    roleId: int(11) FK,
//    updatedAt:TimeStamp,	
//    createdAt:TimeStamp,
//    hasBan:false,
//    PK: userId}
// 
// Data Architecture Continued:

// ContentTypes{
// contentTypeId: auto int(11),
// name: string not null,
// description: string null,
// updatedAt:TimeStamp,	
// createdAt:TimeStamp}

// Contents{
// contentId: auto int(15),
// contentTypeId: int(11),
// contentImage(s): ????
// contentShortText: string(255),
// contentText: text,
// userId: int(11),
// liveFrom: DateTime null,
// liveUntil: DateTime null,
// live: bool null,
// upvote: int(11),
// downvote: int(11),
// updatedAt:TimeStamp,	
// createdAt:TimeStamp,
// PK(contentId}}
