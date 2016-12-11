module.exports = (sequelize, DataTypes) => {

  const Chatroom = sequelize.define('Chatroom', {
    name: {
      type: DataTypes.STRING
    },
    chat: {
      type: DataTypes.TEXT
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate: (models) => {
        Chatroom.belongsTo(models.Lesson, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        });
      }
    }
  });

  return Chatroom;
};
