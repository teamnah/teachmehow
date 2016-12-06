

angular
.module('app.splash', [])
.controller('SplashCtrl',function($http,Helpers){
  vm = this;
  
  vm.lessons = [];

  vm.storage = Helpers.getCache();
  console.log(vm.storage);
  // Helpers.getLessons()
  // .then(result=>{
  //   console.log("client:splashCtrl:",result);
  //   vm.lessons = result.data;
  // })

  // Helpers.getCategory()
  // .then(result=>{
  //   console.log("getCategory: splashCtrl:",result);
  // })

  // Helpers.getUsers()
  // .then(result=>{
  //   console.log("getUsers: splashCtrl:",result);
  // })



  return vm;
})
