const Sequelize = require('sequelize');
const db = require('./db.connect.js');

module.exports = function (server) {
  let io = require('socket.io').listen(server);

  io.sockets.on('connection', function (socket) {
    socket.on('send-message', function (data) {
      db.Chatroom.findOne({
        where: {
          id: data.id
        }
      })
        .then(result => {
          if (result) {
            console.log('THIS IS CHATTTT', data.msg);
            result.chat.push(data.msg);
            console.log('THIS IS RESULT', result.chat);
            console.log('THIS IS DATA', result);
            result.save();
          }
        });

      io.sockets.emit('get-message', data);

      console.log('THIS IS DATA', data.id);
    });
  });
};
