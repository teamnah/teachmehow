
angular
.module('app.prof', [])
.controller('ProfCtrl',function($state, $stateParams, $scope, $http, $timeout, authService, Helpers){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  // console.log("state params", $stateParams);
  if (!Object.keys(vm.cache).length) {
    console.log('********reinitializing helpers')
    Helpers.init()
    .then(() => {
      vm.cache = Helpers.getCache();
      init();
    })
  } else {
    init();
  }

  function init(){
    vm.profile = vm.cache.Users.filter(user=>{
      return user.id === +$stateParams.input;
    })[0]
    console.log("viewing profile for:",vm.profile)
    vm.picture = vm.profile.picture || "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg"
    if (typeof vm.profile.bio === 'string') {
      vm.profile.bio = JSON.parse(vm.profile.bio)
    }
    vm.title = vm.profile.bio && vm.profile.bio.title? 
      vm.profile.bio.title : 
      "Knowledge Enthusiast"
    vm.blurb = vm.profile.bio && vm.profile.bio.blurb ? 
      vm.profile.bio.blurb : 
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

    $scope.$watch('vm.title', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        vm.profile.bio?
          vm.profile.bio.title = newVal :
          vm.profile.bio = {title: newVal};
        console.log(vm.profile.bio)
        $http.put('/api/users/'+vm.profile.id, vm.profile.bio)
        .then(resp => console.log(resp))
      }
    });

    $scope.$watch('vm.blurb', function(newVal, oldVal) {
      console.log('old:',oldVal,'; new:',newVal,'; bio:',vm.profile.bio)
      if (newVal !== oldVal) {
        vm.profile.bio?
          vm.profile.bio.blurb = newVal :
          vm.profile.bio = {blurb: newVal};
        console.log("$watch:",vm.profile.bio)
        $http.put('/api/users/'+vm.profile.id, vm.profile.bio)
        .then(resp => console.log(resp))
      }
    });
  }
  
  return vm;

})