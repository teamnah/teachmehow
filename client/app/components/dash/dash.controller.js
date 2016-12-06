
angular
.module('app.dash', [])
.controller('DashCtrl', function($scope, $stateParams, Helpers){
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