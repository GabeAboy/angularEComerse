angular.module('app').directive('productgrid', function () {
    return {
        templateUrl: '../product-tmpl.html',
        restrict:'AE',
        controller: 'shopCtrl',
        link: function(scope,elem,attr) {
            scope.getIntro.then(function(response) {
              scope.dataIntro = response;
            });
        }
    };
});
