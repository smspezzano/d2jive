var d2jiveRouter = angular.module("d2jiveRouter", ["ngRoute"]);

d2jiveRouter.config(['$routeProvider', function(
  $routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'assets/d2jive/templates/index.html',
      controller: 'IndexCtrl'
    })
    .when('/venues/:locale', {
      templateUrl: 'assets/d2jive/templates/localeResults.html',
      controller: 'LocalResultsCtrl'
    })
    .when('/venue/:venueName/:venueId', {
      templateUrl: 'assets/d2jive/templates/venueResults.html',
      controller: 'VenueResultsCtrl'
    })
    .otherwise({
      templateUrl: 'assets/d2jive/templates/index.html',
      controller: 'IndexCtrl'
    });
}]);


