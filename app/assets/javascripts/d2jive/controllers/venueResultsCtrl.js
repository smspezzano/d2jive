d2jiveControllers.controller('VenueResultsCtrl', ['$scope','$http','$routeParams',
  function($scope, $http, $routeParams){

    var venueId = $routeParams.venueId;

    var baseUrl = 'http://api.songkick.com/api/3.0/venues/';

    var apiKey = '/calendar.json?apikey=4ash2icfOuY4R7v5'

    var url = baseUrl + venueId + apiKey  + '&jsoncallback=JSON_CALLBACK' ;

    var venueArray = []

    var init = function(url){
      $http.jsonp(url)
        .success(function (data) {
          $scope.events = data.resultsPage.results.event
          console.log(data);
        }).
        error(function(data){
          console.log('failure');
        });
    }

    init(url);




}]);
