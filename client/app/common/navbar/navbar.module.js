import angular from 'angular';
import { NavbarComponent } from './navbar.component';

export const NavbarModule = 
  (function(){
    'ngInject';
    
    angular
      .module('navbar', [])
      .component('navbar', NavbarComponent)
      .name;
  }())