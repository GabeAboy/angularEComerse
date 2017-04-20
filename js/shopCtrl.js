angular.module('app').controller('shopCtrl',function($scope,shopService,$state) {
  $scope.name='Aboy'
  shopService.getShoping().then(function(data) {

    $scope.shopListing = data.data
    console.log($scope.shopListing);

  })
  $scope.ngClick = true;
  $scope.changer=function() {
    this.ngClick = ! this.ngClick
    console.log('enter',$scope.ngClick);

    return $scope.ngClick;
  }

  $scope.clickedMe=function(data) {
    $scope.id=data
    console.log($scope.id);
    $state.transitionTo('details',{id:$scope.id})
  }
}).directive('productgrid', function () {
    return {
        templateUrl: '../views/product-tmpl.html',
        restrict:'AE',

    };
});
