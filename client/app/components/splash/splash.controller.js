

angular
.module('app.splash', ['datatables'])
.controller('SplashCtrl',function($http,Helpers,$state){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();
  
  vm.goLesson = (input) =>{
    console.log(input);
    $state.go("lesson",{input: input})
  }
  
  vm.goProfile = (input) =>{
    console.log(input);
    $state.go("prof",{input: input})
  }
  return vm;
})
