
module.exports = (sequelize, DataTypes) => {

  const Request = sequelize.define('Request', {
    name: {
      type: DataTypes.STRING,
    },
    upvote: {
      type: DataTypes.INTEGER,
    },
    spare1: {
      type: DataTypes.TEXT
    }
    }, {
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
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
  
  return Request;
}