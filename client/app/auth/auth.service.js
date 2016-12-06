angular.module('teachMe')
.factory('authService', function($q, $http, $state, lock, authManager){
  let currentUser = localStorage.getItem('id_profile');
  let showCurrent = function(){
    return currentUser;
  }
  let login = () => {
    lock.show();
  }

  let logout = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('id_profile');
    authManager.unauthenticate();
    currentUser = false;
  }

  /**
   * set up the logic for when a user authenticates
   * This method is called from .run in app.js
   */



  let registerAuthListener = () => {
    lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      authManager.authenticate()
  
      /** 
       * Used to get social profile information.
       * Can be saved with a deferred promise.
       * Profile.user_id is the same as the user
       * id retrieved from payload token.
       */
      lock.getProfile(authResult.idToken, (err, profile) => {
        if (err) throw new Error(err);
        localStorage.setItem('id_profile', profile);
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
          console.log('first login')
          $http.post('/api/users', {
            name: profile.name,
            teachFlag: false,
            rating: null,
            bio: '',
            picture: profile.picture,
            auth: profile.user_id            
          }).then((user)=>{
            currentUser = user.data;
            console.log('logged in as:',currentUser);
          });
        } else {
          $http.post('/api/login', {
            auth: profile.user_id
          }).then((user) => {
            console.log(user.data)
            if (user.data[0]) {
              currentUser = user.data[0];
              console.log('logged in as:',currentUser);
            } else {
              $http.post('/api/users', {
                name: profile.name,
                teachFlag: false,
                rating: null,
                bio: '',
                picture: profile.picture,
                auth: profile.user_id            
              }).then((user)=>{
                currentUser = user.data;
                console.log('logged in as:',currentUser);
                if (currentUser.teacherFlag) {
                  $state.go('dash', {input:input})
                }
              });              
            }          
          })
        }
      })
    });
  }


  return {
    login: login,
    logout: logout,
    showCurrent: showCurrent,
    registerAuthListener: registerAuthListener
  }
})