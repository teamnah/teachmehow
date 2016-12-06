

angular.module('teachMe', [
  'auth0.lock',
  'angular-jwt',
  'app.dash',
  'app.prof',
  'app.request',
  'app.splash',
  'app.helpers',
  'ui.router'
])
.config(config)
.run(run)

function config ($stateProvider, lockProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/splash');

  $stateProvider
    .state('splash',{
      url: '/splash',
      templateUrl: 'app/components/splash/splash.html',
      controller: 'SplashCtrl as vm'
    })
    .state('dash',{
      url: '/dash',
      templateUrl: 'app/components/dash/dash.html',
      controller: 'DashCtrl as vm'
    })
    .state('prof',{
      url: '/prof',
      templateUrl: 'app/components/prof/prof.html',
      controller: 'ProfCtrl as vm'
    })
    .state('request',{
      url: '/request',
      templateUrl: 'app/components/request/request.html',
      controller: 'RequestCtrl as vm'
    })

  lockProvider.init({
      clientID: 'n2ZOtt8oFInDvBD34j8741C1UV3PBh61',
      domain: 'teach-me-how.auth0.com'
    });      
}

function run($rootScope, authService, lock) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthListener();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();
  }