angular.module('app').controller('productDetailsCtrl',function($scope,$state,$http,$q,$stateParams) {
  $scope.product;
  var deferred = $q.defer()
  $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/'+$stateParams.id
  }).then(function(response) {

    $scope.product=response;
    console.log($scope.product);
    deferred.resolve(response);
  })
    return deferred.promise;

})
