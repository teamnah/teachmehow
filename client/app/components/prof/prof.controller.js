angular
.module('app.prof', ['datatables'])
.controller('ProfCtrl', function($state, $stateParams, $scope, $http, $timeout, authService, Helpers) {
  let vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  
  vm.goLesson = (input) => {
    $state.go("lesson", {
      input: input
    });
  };

  $timeout(() => {
    if (!Object.keys(vm.cache).length) {
      Helpers.init()
      .then(() => {
        vm.cache = Helpers.getCache();
        init();
      });
    } else {
      init();
    };   
  }, 300);

  function init(){
    vm.profile = vm.cache.Users.filter(user => {
      return user.id === +$stateParams.input;
    })[0];

    vm.allLessons = vm.cache.Master
      .filter(lesson => {
        if(lesson.UserName.id === +$stateParams.input) return lesson;
      });

    vm.picture = vm.profile.picture || 
      "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg";
    if (typeof vm.profile.bio === 'string' && vm.profile.bio !== '') {
      vm.profile.bio = JSON.parse(vm.profile.bio)
    };
    vm.title = vm.profile.bio && vm.profile.bio.title? 
      vm.profile.bio.title : 
      "Knowledge Enthusiast";
    vm.blurb = vm.profile.bio && vm.profile.bio.blurb ? 
      vm.profile.bio.blurb : 
      "TeachMeHow.com member since\n"+vm.profile.createdAt;
    
    if (authService.showCurrent()) {
      vm.myProfile = vm.profile.id === authService.showCurrent().id;
    };

    $scope.$watch('vm.title', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        vm.profile.bio?
          vm.profile.bio.title = newVal :
          vm.profile.bio = {
            title: newVal
          };
        $http.put('/api/users/'+vm.profile.id+'/bio', vm.profile.bio)
        .then(resp => console.log(resp));
      };
    });

    $scope.$watch('vm.blurb', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        vm.profile.bio?
          vm.profile.bio.blurb = newVal :
          vm.profile.bio = {
            blurb: newVal
          };
        $http.put('/api/users/'+vm.profile.id+'/bio', vm.profile.bio)
        .then(resp => console.log(resp));
      };
    });

    $scope.$watch('vm.profile.name', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        vm.profile.name = newVal;
        $http.put('/api/users/'+vm.profile.id+'/name', {
          name: vm.profile.name
        })
        .then(resp => console.log(resp));
      };
    });
  };
  
  return vm;

});