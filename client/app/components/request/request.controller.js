angular
.module('app.request', ['datatables']) 
.controller('RequestCtrl', function($state, $http, RequestService, Helpers, $timeout, authService) {

  vm = this;
  vm.requests = [];
  vm.pendingRequest;

  $timeout(function() {
    if (Object.keys(Helpers.getCache()).length === 0) {
      Helpers
        .init()
        .then(function() {
          vm.init();
        })
    } else {
      vm.init();
    }
  }, 500);

  vm.goProfile = function(input) {
    console.log(input);
    $state.go("prof", {input: input})
  };

  vm.init = function() {
    vm.cache = Helpers.getCache();
    RequestService
      .getAllRequests()
      .then(function(returnedRequests) {
        vm.requests = returnedRequests.map(vm.editRequests).reverse();
        console.log('these are the returned requests', vm.requests);
      })
      .catch(function(error) {
        console.log('Error returning requests');
      })
  };
  
  vm.editRequests = function(request) {
    request.userName = vm.cache.Users.filter(function(user) {
      if (user.id === request.UserId) return user;
    })[0].name;
    request.categoryName = vm.cache.Category.filter(function(category) {
      if (category.id === request.CategoryId) return category;
    })[0].name;
    return request;
  };

  vm.addRequest = function() {
    vm.userExists = authService.showCurrent();
    if (vm.userExists !== null) {
      let UserId = authService.showCurrent().id;
      vm.UserId = UserId;
      RequestService
        .addRequest()
        .then(function(addedRequest) {
          vm.pendingRequest = addedRequest;
          return Helpers.init()
        })
        .then(function(returnedCache) {
          vm.cache = returnedCache;
          let modifiedRequest = vm.editRequests(vm.pendingRequest);
          vm.requests.unshift(modifiedRequest);
        })
        .catch(function(error) {
          console.log('Error adding request');
        });
    } else {
        swal({
          title: "Invalid Login",
          text: "Please log in to make a request.",
          imageUrl: "http://vignette2.wikia.nocookie.net/youtubepoop/images/4/4e/Tubby.png/revision/latest?cb=20140517044848"
        });
    }
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
    newRequest.userId = vm.UserId;
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