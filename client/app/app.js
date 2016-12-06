

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

function config ($stateProvider,
                 $urlRouterProvider,
                 jwtOptionsProvider,
                 lockProvider) {
  $urlRouterProvider.otherwise('/splash');

  $stateProvider
    .state('splash',{
      url: '/splash',
      templateUrl: 'app/components/splash/splash.html',
      controller: 'SplashCtrl as vm'
    })
    .state('dash',{
      url: '/dash/:input',
      templateUrl: 'app/components/dash/dash.html',
      controller: 'DashCtrl as vm'
    })
    .state('prof',{
      url: '/prof/:input',
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
  })
  
  /** configuration for agular.jwt */
  jwtOptionsProvider.config({
    tokenGetter: function(){
      return localStorage.getItem('id_token')
    }
  });      
}

function run($rootScope, authService, authManager, lock) {
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthListener();

    // Register the synchronous hash parser
    // when using UI Router
    lock.interceptHash();

  /**
   * Use the authManager from angular-jwt to check for
   * the user's authentication state when the page is
   * refreshed and maintain authentication. Will use 
   * the setting set in jwtOptionsProvider.config*/
  authManager.checkAuthOnRefresh();
  }