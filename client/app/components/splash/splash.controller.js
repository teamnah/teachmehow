

angular
.module('app.splash', [])
.controller('SplashCtrl',function($http,Helpers,$state){
  vm = this;
  vm.cache = {};
  vm.cache = Helpers.getCache();

  vm.goProfile = (input) =>{
    console.log(input);
    $state.go("prof",{input: input})
  }
  return vm;
})
