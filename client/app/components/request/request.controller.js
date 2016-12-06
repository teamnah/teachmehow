
angular
.module('app.request', []) 
.controller('RequestCtrl', function($http, DashService){
  vm = this;
  vm.requests = [];
  // vm.getRequests = function() {
    DashService
      .getAllRequests()
  // };
  return vm;
})
.factory('DashService', function($http) {
  const getAllRequests = function() {
    return $http({
      method: 'GET',
      url: '/api/requests'
    })
    .then(function(requests) {
      vm.requests = requests;
      console.log('Here are the requests', vm.requests);
    })
    .catch(function(err) {
      console.log('Error retrieving requests.');
    })
  };

  return {
    getAllRequests: getAllRequests
  };
});