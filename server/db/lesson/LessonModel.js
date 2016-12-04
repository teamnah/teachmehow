
module.exports = (sequelize, DataTypes)=>{
  var Lesson = sequelize.define('Lesson', {
      name: {
        type: DataTypes.STRING,
      },
      details: {
        type: DataTypes.TEXT
      },
      rating: {
        type: DataTypes.TEXT
      },
      spare1: {
        type: DataTypes.TEXT
      }
    }, {
    freezeTableName: true,
    classMethods: {
      associate: (models)=>{
        Lesson.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
        Lesson.belongsTo(models.Category, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
      }
    }
  })
  
  return Lesson
}