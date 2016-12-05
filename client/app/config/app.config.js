function AppConfig(lockProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm'
    })
    
  lockProvider.init({
    clientID: '5KsCxrCUF5N69xhmQbISpHrihbBLPqwy',
    domain: 'teach-me-how.auth0.com'
  });

  $urlRouterProvider.otherwise('/home');
}