
angular
.module('app.request', []) 
.controller('RequestCtrl', function($http, RequestService, Helpers, $timeout){
  vm = this;
  vm.requests = [];
  vm.pendingRequest;
  $timeout(() => {
    if (Object.keys(Helpers.getCache()).length === 0) {
      Helpers
        .init()
        .then(function() {
          vm.cache = Helpers.getCache();
          console.log('Attemping to access the cache in if block', vm.cache);
        })
    } else {
      vm.cache = Helpers.getCache();
      console.log('Attemping to access the cache in else block', vm.cache.Category);
      RequestService
        .getAllRequests()
        .then(function(returnedRequests) {
          console.log('accessing cache categories in getallrequests', vm.cache.Category)
          vm.requests = returnedRequests.map(vm.init).reverse();
          console.log('modified requests', vm.requests);
        })
        .catch(function(error) {
          console.log('Error returning requests');
        })
    }
  }, 500)
  
  vm.init = function(request) {
    request.userName = vm.cache.Users.filter(function(user) {
      if (user.id === request.UserId) return user;
    })[0].name;
    // request.categoryName = vm.cache.Category.filter(function(category) {
    //   if (category.id === request.CategoryId) return category;
    // })[0].name;
    return request;
  };

  vm.addRequest = function() {
    RequestService
      .addRequest()
      .then(function(addedRequest) {
        vm.pendingRequest = vm.init(addedRequest);
        // return Helpers.init()
      })
      // .then(function() {
      //   vm.cache = Helpers.getCache();
      //   let modifiedRequest = vm.init(vm.pendingRequest);
      //   vm.requests.push(modifiedRequest);
      // })
      .catch(function(error) {
        console.log('Error adding request');
      });
  };

  return vm;

})
.factory('RequestService', function($http) {
  const getAllRequests = function() {
    return $http({
      method: 'GET',
      url: '/api/requests'
    })
    .then(function(requests) {
      return requests.data;
    })
    .catch(function(err) {
      console.log('RequestController (getAllRequests): Error retrieving requests.');
    })
  };

  const addRequest = function() {

    let newRequest = {};
    newRequest.userName = vm.userName;
    newRequest.requestName = vm.requestName;
    newRequest.categoryName = vm.categoryName;

    return $http({
      method: 'POST',
      url: '/api/requests',
      data: newRequest
    })
    .then(function(addedRequest) {
      return addedRequest.data;
    })
    .catch(function(err) {
      console.log('Error posting request');
    });
  };

  return {
    getAllRequests: getAllRequests,
    addRequest: addRequest
  };
});