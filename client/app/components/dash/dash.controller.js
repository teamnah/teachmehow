
angular
.module('app.dash', [])
.controller('DashCtrl', function($scope, $state, $stateParams, authService, Helpers){
  if (!authService.showCurrent() /** ||!authService.showCurrent().teacherFlag */) {
    $state.go('splash')
  }
  vm = this;
  vm.teacherId = $stateParams.input;
  vm.teacherDetails;

  Helpers
    .getlessByUser(vm.teacherId)
    .then(function(teacherData) {
      vm.teacherDetails = teacherData.data[0];
      console.log('these are the teacher details', teacherData.data)
    })

  return vm;
})