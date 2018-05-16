module.exports = function (sequelize , DataTypes){
  var test = sequelize.define("test" , {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return test;
}