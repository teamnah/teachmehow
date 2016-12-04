
module.exports = (sequelize, DataTypes)=>{
  var Booking = sequelize.define('Booking', {
      accept: {
        type: DataTypes.BOOLEAN,
      },
      details: {
        type: DataTypes.TEXT
      },
      spare1: {
        type: DataTypes.TEXT
      }
    }, {
    freezeTableName: true,
    classMethods: {
      associate: (models)=>{
        Booking.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
        Booking.belongsTo(models.Lesson, {
          foreignKey: {
            allowNull: false,
          },
          onDelete: 'CASCADE'
        })
      }
    }
  })
  
  return Booking
}