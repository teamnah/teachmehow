angular.module('teachMe')
.factory('authService', function($q, $http, $state, lock, authManager){
  /**
   * connect the profile sent back from Auth0 with the profile from our
   * database. If the profile does not exist in our database, create it.
   */
  let connectProfile = (profile) => {
    $http.post('/api/login', {
      auth: profile.user_id
    }).then((user) => {
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

  /**
   * check to see if user is already logged in. If they are, fetch
   * auth0 profile and then use that to fetch database profile
   */
  let currentUser = localStorage.getItem('id_token');
  if (currentUser) {
    lock.getProfile(currentUser, (err, profile) => {
      if (err) throw new Error(err);
      connectProfile(profile);
    })
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
       * Use the token sent back to get full Auth0 profile 
       * information, then connect that to database profile
       */
      lock.getProfile(authResult.idToken, (err, profile) => {
        if (err) throw new Error(err);
        connectProfile(profile);
      })
    });
  }

  let becomeTeacher = () => {
    return $http.put('/api/users/'+currentUser.id+'/teach', {teachFlag:true})
  }

  /** basic authentication functionality */
  let showCurrent = function(){
    return currentUser;
  }

  let login = () => {
    lock.show();
  }

  let logout = () => {
    localStorage.removeItem('id_token');
    authManager.unauthenticate();
    currentUser = false;
  }
  
  /** expose public methods */
  return {
    login: login,
    logout: logout,
    showCurrent: showCurrent,
    becomeTeacher: becomeTeacher,
    registerAuthListener: registerAuthListener
  }
})