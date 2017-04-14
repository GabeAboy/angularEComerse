angular.module('app').service('shopService',function($http,$q) {

  this.getShoping=function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response) {
       console.log('this is response: ',response);
      deferred.resolve(response);
    });
      return deferred.promise;
    };


});
