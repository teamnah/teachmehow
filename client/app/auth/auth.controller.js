angular.module('teachMe')
.controller('AuthCtrl', function($scope, $state, $timeout, authService) {
  let vm=this;
  vm.authService = authService;
  authService.registerAuthListener();
  $timeout(()=>{
    vm.isTeach = authService.showCurrent().teachFlag
  }, 300)

  vm.becomeTeacher = () => {
    authService.becomeTeacher()
    .then(()=>{
      vm.isTeach = true;
      $state.go('dash')
    })
  }

  vm.goDash = () => {
    $state.go('dash',{input:authService.showCurrent().id})
  }
  vm.goProf = () => {
    $state.go('prof', {input:authService.showCurrent().id})
  }

  return vm;
  
})