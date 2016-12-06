
angular
.module('app.dash', [])
.controller('DashCtrl', function(Helpers, $scope, $state){
  vm = this;
  /**
   * Currently manually passing in a teacher id
   * In practice, would grab the input off of $scope
   * and pass in as the parameter to getlessByUser
   * 
   * vm.teacherId = $scope.userInput; 
   */
  vm.teacherId = 4;
  vm.teacherDetails;

  

  console.log('Here we are accessing the cache', vm.cache);

  return vm;
})


// pass in $state, $stateParams
// grab input and pass into getlessByUser
// returns a promise and then update the view with the teachers details