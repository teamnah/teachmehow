angular.module('teachMe')
.controller('AuthCtrl', function($scope, authService) {
  let vm=this;
  vm.authService = authService;
  authService.registerAuthListener()
  return vm;
})