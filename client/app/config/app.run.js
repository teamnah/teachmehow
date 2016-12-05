function AppRun($rootScope, authService, lock) {
  'ngInject';
    // Put the authService on $rootScope so its methods
    // can be accessed from the nav bar
    $rootScope.authService = authService;

    // Register the authentication listener that is
    // set up in auth.service.js
    authService.registerAuthenticationListener();

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
export default AppRun;