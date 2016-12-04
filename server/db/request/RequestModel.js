
module.exports = (sequelize, DataTypes)=>{
  var Request = sequelize.define('Request', {
    name: {
      type: DataTypes.STRING,
    },
    spare1: {
      type: DataTypes.TEXT
    }
    }, {
    freezeTableName: true,
    classMethods: {
      associate: (models)=>{
        Request.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
        Request.belongsTo(models.Category, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
      }
    }
  })
  
  return Request
}