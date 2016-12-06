
angular
.module('app.request', []) 
.controller('RequestCtrl', function($http, RequestService, Helpers){
  vm = this;
  vm.requests = [];
  vm.cache = Helpers.getCache();
  console.log('Attemping to access the cache on controller instantiation', vm.cache);
  
  RequestService
      .getAllRequests()
  
  vm.addRequest = function() {
    RequestService
      .addRequest()
      .then(function(addedRequest) {
        vm.requests.data.push(addedRequest);
        vm.cache;
        Helpers
          .init()
          // .then(function(cache) {
          //   console.log('Helpers.init() returns this', cache);
            vm.cache = Helpers.getCache();
            console.log('Attempting to access the cache after calling init', vm.cache);
          // })
          // .catch(function(error) {
          //   console.log('Error reinitializing the helpers cache');
          // })
      })
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
      vm.requests = requests;
      console.log('RequestController (getAllRequests): Here are the requests', vm.requests);
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