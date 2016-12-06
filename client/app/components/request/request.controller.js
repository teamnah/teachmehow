
angular
.module('app.request', []) 
.controller('RequestCtrl', function($http, RequestService){
  vm = this;
  vm.requests = [];
  
  RequestService
      .getAllRequests()

  vm.addRequest = function() {
    RequestService
      .addRequest()
      .then(function(addedRequest) {
        vm.requests.data.push(addedRequest)
      })
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