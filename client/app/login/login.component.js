import AppModule from './app.module.js'

angular.module('app')
.component('login',{
  templateUrl:'app/components/login/login.html',
  controller:'LoginCtrl',
  controllerAs: 'vm'
})