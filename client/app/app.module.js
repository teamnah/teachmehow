import angular from 'angular';
import 'angular-ui-router';
import { AppComponent } from './app.component.js';
import { AppConfig } from './config/app.config.js'
// import { ComponentsModule } from './components/components.module';
import CommonModule from './common/common.module.js';
import './components/splash'

const requires = [
  // ComponentsModule,
  'app.common',
  'ui.router'  
]

export const AppModule = 
[function(){

  angular
    .module('app', requires)
    .component('app', AppComponent)
    .config([
      '$urlRouterProvider',
      '$stateProvider',
      function(/*lockProvider,*/ $urlRouterProvider, $stateProvider) {
      'ngInject';

      $stateProvider
        .state('app', {
          abstract: true,
          template: '<ui-view></ui-view>'
        })

      $urlRouterProvider.otherwise('/');
    }])
    .name;
}()]