
angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('init',{
              url:'/',
              templateUrl: "../views/home.html"
          })
          .state('blog',{
            url:'/blog',
            templateUrl:'../views/blog.html'
          })
          .state('home',{
            url:'/home',
            templateUrl:'../views/home.html'
          })
          .state('about',{
            url:'/about',
            templateUrl:'../views/about.html'
          })
          .state('shop',{
            url:'/shop',
            controller:"shopCtrl",
            templateUrl:'../views/shop.html'
          })
          .state('details',{
            url:'/details:id',
            controller:'productDetailsCtrl',
            templateUrl:'../views/product-details.html'
          })
        $urlRouterProvider
            .otherwise('/home');
    });
