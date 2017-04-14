angular.module('app').controller('shopCtrl',function($scope,shopService,$state) {
  $scope.name='Aboy'
  shopService.getShoping().then(function(data) {

    $scope.shopList = data.data
    console.log($scope.shopList);
  })
  $scope.clickedMe=function(data) {

    $scope.id=data
    console.log('scope',$scope.id);
    $state.transitionTo('details',$scope.id)
  }
})
