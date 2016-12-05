import angular from 'angular';
import appConfig from'./config/app.config.js'
import appRun from './config/app.run.js';
import authService from './config/authservice.js';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import 'angular-ui-router';

const requires = [
  'ui.router',
  'auth0.lock', 
  'angular-jwt', 
  'ui.router'
];

export const AppModule = angular
  .module('app', requires)
  .component('app', AppComponent)
  .config(appConfig)
  .run(appRun)
  .name;
