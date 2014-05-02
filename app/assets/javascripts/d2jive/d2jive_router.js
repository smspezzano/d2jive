var d2jiveRouter = angular.module("d2jiveRouter", ["ngRoute"]);

d2jiveRouter.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../templates/index.html',
      controller: 'IndexCtrl'
    })
    .when('/newsfeed', {
      templateUrl: '../templates/journeys.html',
      controller: 'NewsFeedCtrl'
    })
    .when('/profile', {
      templateUrl: '../templates/profile.html',
      controller: 'ProfileCtrl'
    })
}]);