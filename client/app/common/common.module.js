import angular from 'angular';
import { NavbarModule } from './navbar/navbar.module.js';

export const CommonModule =
  ['navbar', function(){
    'ngInject';

    angular
      .module('app.common', [
        'navbar'
      ])
      .name;
  }()]