
module.exports = (sequelize, DataTypes) => {

  const Rating = sequelize.define('Rating', {
      rating: {
        type: DataTypes.FLOAT,
      },
      review: {
        type: DataTypes.TEXT
      },
      spare1: {
        type: DataTypes.TEXT
      }
    }, {
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        Rating.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
        Rating.belongsTo(models.Lesson, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
      }
    }
  })
  
  return Rating;
}