function AppConfig(/*lockProvider,*/ $urlRouterProvider, $stateProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      abstract: true,
    });  

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;