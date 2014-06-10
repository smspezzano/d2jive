var d2jiveRouter = angular.module("d2jiveRouter", ["ngRoute"]);

d2jiveRouter.config(['$routeProvider', function(
  $routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'assets/index.html',
      controller: 'IndexCtrl'
    })
    .when('/venues/:locale', {
      templateUrl: 'assets/localeResults.html',
      controller: 'LocalResultsCtrl'
    })
    .when('/venue/:venueName/:venueId', {
      templateUrl: 'assets/venueResults.html',
      controller: 'VenueResultsCtrl'
    })
    .otherwise({
      templateUrl: 'assets/index.html',
      controller: 'IndexCtrl'
    });
}]);


