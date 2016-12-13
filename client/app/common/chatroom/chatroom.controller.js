(function () {
  'use strict';

  angular
    .module('app.chatroom')
    .controller('ChatroomCtrl', ChatroomCtrl);

  ChatroomCtrl.$inject = ['socket', 'authService', 'Helpers', '$stateParams', '$scope'];

  function ChatroomCtrl (socket, authService, Helpers, $stateParams, $scope) {
    var vm = this;
    vm.currentClass;
    vm.currentUserName = '';
    vm.text = '';
    vm.messages;

    vm.chatInit = function () {
      vm.currentClass = parseInt($stateParams.input);
      vm.currentUserName = authService.showCurrent().name;
      socket.emit('send-room', parseInt($stateParams.input));
      socket.on('get-room', function (data) {
        console.log('THIS IS CHATS', data);
        vm.messages = data.map(function (message) {
          return JSON.parse(message);
        });
        console.log('vm.messages = ', vm.messages);
        $scope.$digest();
      });
    };

    vm.sendMessage = function () {
      console.log('THIS IS CURRENT CHAT', vm.messages.text);
      var chat = {
        'id': vm.currentClass,
        'msg': {
          'user': vm.currentUserName,
          'text': vm.messages.text,
          'date': new Date
        }
      };
      socket.emit('send-message', chat);
      vm.messages.text = '';
    };

    socket.on('get-message', function (data) {
      if (data.id === vm.currentClass) {
        var chat = {
          currentUserName: data.msg.user,
          text: data.msg.text,
          date: data.msg.date
        };

        vm.messages.push(chat);
        $scope.$digest();
      }
    });
  }
})();
