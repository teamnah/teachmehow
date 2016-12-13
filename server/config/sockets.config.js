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
            result.chat.push(JSON.stringify(data.msg));
            console.log('THIS IS RESULT', result.chat);
            console.log('THIS IS DATA', result);
            result.save();
          } else {
            res.json([]);
          }
        });
      // .then(result => {
      //   res.json(result)
      // })
      // .catch(err => {
      //   res.json(err)
      //   throw err
      // })
      io.sockets.emit('get-message', data);

      console.log('THIS IS DATA', data.id);
    });
  });
};
