(function () {
  'use strict';

  angular
    .module('app.chatroom')
    .controller('ChatroomCtrl', ChatroomCtrl);

  ChatroomCtrl.$inject = ['socket', 'authService', 'Helpers', '$stateParams', '$scope', '$anchorScroll', '$location'];

  function ChatroomCtrl (socket, authService, Helpers, $stateParams, $scope, $anchorScroll, $location) {
    var vmCR = this;
    vmCR.currentClass;
    vmCR.currentUserName = '';
    vmCR.text = '';
    vmCR.messages;

    vmCR.gotoBottom = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
      // call $anchorScroll()
      $anchorScroll();
    };

    vmCR.objDiv = document.getElementById('chat');

    vmCR.chatInit = function () {
      vmCR.currentClass = parseInt($stateParams.input);
      vmCR.currentUserName = authService.showCurrent().name;
      socket.emit('send-room', parseInt($stateParams.input));
      socket.on('get-room', function (data) {
        if (data.id === vmCR.currentClass) {
          console.log('THIS IS CHATS', data.id);
          console.log('THIS IS CURRENT CLASS', vmCR.currentClass);
          vmCR.messages = data.chat.map(function (message) {
            return JSON.parse(message);
          });
          console.log('vmCR.messages = ', vmCR.messages);
          vmCR.gotoBottom();
          $scope.$digest();
        }
      });
    };

    vmCR.sendMessage = function () {
      console.log('THIS IS CURRENT CHAT', vmCR.messages.text);
      var chat = {
        'id': vmCR.currentClass,
        'msg': {
          'user': vmCR.currentUserName,
          'text': vmCR.messages.text,
          'date': new Date
        }
      };
      socket.emit('send-message', chat);
      vmCR.messages.text = '';
    };

    socket.on('get-message', function (data) {
      if (data.id === vmCR.currentClass) {
        var chat = {
          user: data.msg.user,
          text: data.msg.text,
          date: data.msg.date
        };

        vmCR.messages.push(chat);
        $scope.$digest();
        vmCR.gotoBottom();
      }
    });
  }
})();
