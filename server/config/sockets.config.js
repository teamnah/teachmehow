module.exports = function (server) {
  let io = require('socket.io').listen(server);

  io.sockets.on('connection', function (socket) {
    socket.on('send-message', function (data) {
      io.sockets.emit('get-message', data);
      console.log('THIS IS DATA', data);
    });
  });
};
