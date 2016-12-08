angular
.module('app.request', ['datatables'])
.factory('RequestService', function($http) {
  const getAllRequests = () => {
    return $http({
      method: 'GET',
      url: '/api/requests'
    })
    .then((requests) => {
      return requests.data;
    })
    .catch((err) => {
      console.log('RequestController (getAllRequests): Error retrieving requests.');
    });
  };

  const addRequest = () => {

    let newRequest = {};
    newRequest.userId = vm.UserId;
    newRequest.requestName = vm.requestName;
    newRequest.categoryName = vm.categoryName;

    return $http({
      method: 'POST',
      url: '/api/requests',
      data: newRequest
    })
    .then((addedRequest) => {
      return addedRequest.data;
    })
    .catch((err) => {
      console.log('Error posting request', error);
    });
  };

  return {
    getAllRequests: getAllRequests,
    addRequest: addRequest
  };
});