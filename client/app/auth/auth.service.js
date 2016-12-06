angular.module('teachMe')
.factory('authService', function($q, lock, authManager){
  let login = () => {
    lock.show();
  }

  let logout = () => {
    localStorage.removeItem('id_token');
    authManager.unauthenticate();
  }

  /**
   * set up the logic for when a user authenticates
   * This method is called from .run in app.js
   */



  let registerAuthListener = () => {
    lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      /** log the user id */
      console.log(authResult.idTokenPayload.sub)
      authManager.authenticate()
  
      /** 
       * Used to get social profile information.
       * Can be saved with a deferred promise.
       * Profile.user_id is the same as the user
       * id retrieved from payload token.
       */
      lock.getProfile(authResult.idToken, (err, profile) => {
        if (err) throw new Error(err);
        console.log(profile);
        /**
         * to implement the following, a 'rule' must be set
         * on the the auth0 website with the following code:
         * function(user, context, callback) {
         *   user.firstLogin = context.stats.loginsCount === 1 ?
         *     true:false;
         *   callback(null, user, context);
         * }
         */
        if (profile.firstLogin) {

        }
      })
    });
  }


  return {
    login: login,
    logout: logout,
    registerAuthListener: registerAuthListener
  }
})