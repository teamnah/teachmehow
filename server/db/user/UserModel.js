

module.exports = (sequelize, DataTypes)=>{
  var User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING
      },
      teachFlag: {
        type: DataTypes.BOOLEAN
      },
      rating: {
        type: DataTypes.FLOAT
      },
      bio: {
        type: DataTypes.TEXT
      },
      picture: {
        type: DataTypes.TEXT
      },
      auth: {
        type: DataTypes.TEXT
      },
      spare1: {
        type: DataTypes.TEXT
      }
    }, {
    /**
     * freezeTableName: Model tableName will be the same as the model name
     *  */ 
    freezeTableName: true 
  })
  
  return User
}