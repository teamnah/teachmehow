
angular
.module('app.prof', [])
.controller('ProfCtrl',function($state, $stateParams, Helpers){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  //console.log("state params", $stateParams);
  vm.id = $stateParams.input;

  vm.lessons = vm.cache.LessByUser.filter(lesson=>{
    if(lesson.name===vm.id){
      return lesson.Lessons;
    }
  })[0].Lessons
  
  vm.bio = vm.cache.Users
  console.log("VM id = ", vm.id);
  console.log("lessons by user from cache", vm.lessons)
  return vm;
})