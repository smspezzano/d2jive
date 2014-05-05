var d2jiveRouter = angular.module("d2jiveRouter", ["ngRoute"]);

d2jiveRouter.config(['$routeProvider', function(
  $routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'assets/d2jive/templates/index.html',
      controller: 'controllers/indexCtrl'
    })
    .when('/venues/:locale', {
      templateUrl: 'assets/d2jive/templates/localeResults.html',
      controller: 'controllers/localeResultsCtrl'
    })
    .when('/venue', {
      templateUrl: 'assets/d2jive/templates/venueResults.html',
      controller: 'venueResultsCtrl'
    })
}]);


