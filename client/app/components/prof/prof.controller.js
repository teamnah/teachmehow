
angular
.module('app.prof', [])
.controller('ProfCtrl',function($state, $stateParams, authService, Helpers){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  // console.log("state params", $stateParams);
  vm.profile = vm.cache.Users.filter(user=>{
    return user.id === +$stateParams.input;
  })[0]
  console.log("viewing profile for:",vm.profile)
  vm.picture = vm.profile.picture || "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg"
  vm.title = vm.profile.bio ? vm.profile.bio.title : "Knowledge Enthusiast"
  vm.blurb = vm.profile.bio ? vm.profile.bio.blurb : "TeachMeHow.com member since "+vm.profile.createdAt;
  vm.myProfile = vm.profile.id === authService.showCurrent().id

  vm.lessons = vm.cache.LessByUser.filter(lesson=>{
    if(lesson.id===vm.profile.id){
      return lesson.Lessons;
    }
  })[0].Lessons
  

  console.log("VM id = ", vm.id);
  console.log("lessons by user from cache", vm.lessons)
  vm.updateProf = function() {
    console.log('update prof')
  }
  vm.updateField = function(field){

  }

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