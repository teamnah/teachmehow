
module.exports = (sequelize, DataTypes)=>{
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
    },
    spare1: {
      type: DataTypes.TEXT
    }
    }, {
    freezeTableName: true 
  })
  
  return Category
}