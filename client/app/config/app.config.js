function AppConfig(lockProvider, $urlRouterProvider) {
  'ngInject';
  lockProvider.init({
    clientID: '5KsCxrCUF5N69xhmQbISpHrihbBLPqwy',
    domain: 'teach-me-how.auth0.com'
  });

  $urlRouterProvider.otherwise('/');
}