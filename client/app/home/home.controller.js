import AppModule from './app.module.js'

angular.module('app')
.controller('HomeCtrl', function(authService) {
  let vm=this;
  vm.authService = authService;
})