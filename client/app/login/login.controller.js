import AppModule from './app.module.js'

angular.module('app')
.controller('LoginCtrl', function(authService) {
  let vm=this;
  vm.authService = authService;
})