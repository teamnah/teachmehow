
angular
.module('app.prof', [])
.controller('ProfCtrl',function($state, $stateParams, $scope, $http, authService, Helpers){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  // console.log("state params", $stateParams);
  vm.profile = vm.cache.Users.filter(user=>{
    return user.id === +$stateParams.input;
  })[0]
  console.log("viewing profile for:",vm.profile)
  vm.picture = vm.profile.picture || "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg"
  vm.title = vm.profile.bio && JSON.parse(vm.profile.bio).title? 
    JSON.parse(vm.profile.bio).title : 
    "Knowledge Enthusiast"
  $scope.title = vm.title;
  vm.blurb = vm.profile.bio && JSON.parse(vm.profile.bio).blurb ? 
    JSON.parse(vm.profile.bio).blurb : 
    "TeachMeHow.com member since\n"+vm.profile.createdAt;
  
  if (authService.showCurrent()){
    vm.myProfile = vm.profile.id === authService.showCurrent().id
  }
  
  vm.lessons = vm.cache.LessByUser.filter(lesson=>{
    if(lesson.id===vm.profile.id){
      return lesson.Lessons;
    }
  })[0].Lessons
  
  console.log("lessons by user from cache", vm.lessons)
  vm.updateProf = function() {
    console.log('update prof')
  }
  vm.updateField = function(field){

  }

  $scope.$watch('vm.title', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      vm.profile.bio && JSON.parse(vm.profile.bio).title?
        vm.profile.bio.title = newVal :
        vm.profile.bio = {title: newVal};
      console.log(vm.profile.bio)
      $http.put('/api/users/'+vm.profile.id, vm.profile.bio)
      .then(resp => console.log(resp))
    }
  });

  $scope.$watch('vm.blurb', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      vm.profile.bio && JSON.parse(vm.profile.bio).blurb?
        vm.profile.bio.blurb = newVal :
        vm.profile.bio = {blurb: newVal};
      console.log("$watch:",vm.profile.bio)
      $http.put('/api/users/'+vm.profile.id, vm.profile.bio)
      .then(resp => console.log(resp))
    }
  });
  
  return vm;

})

  // $timeout(()=>{
  //   if(Object.keys(Helpers.getCache()).length === 0){
  //     Helpers.init()
  //     .then(()=>{
  //       vm.teacher = Helpers.getCache()
  //                   .LessByUser
  //                   .filter(user=>{
  //                     if(user.id===Number(vm.teacherId)) return user;
  //                   })[0];
  //     });
  //   }else{
  //     vm.teacher = Helpers.getCache()
  //                   .LessByUser
  //                   .filter(user=>{
  //                     if(user.id===Number(vm.teacherId)) return user;
  //                   })[0];
  //   }
  // }, 500)