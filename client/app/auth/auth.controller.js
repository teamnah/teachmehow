angular.module('teachMe')
.controller('AuthCtrl', function(authService) {
  let vm=this;
  vm.authService = authService;
})