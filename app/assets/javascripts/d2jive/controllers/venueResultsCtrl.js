d2jiveControllers.controller('VenueResultsCtrl', ['$scope','$http','$routeParams',
  '$compile', '$sce', 'spotifyFactory', function($scope, $http, $routeParams, 
    $compile, $sce, spotifyFactory){
    "use strict";

    var venueId = $routeParams.venueId;

    var baseUrl = 'http://api.songkick.com/api/3.0/venues/';

    var apiKey = '/calendar.json?apikey=4ash2icfOuY4R7v5';

    var url = baseUrl + venueId + apiKey  + '&jsoncallback=JSON_CALLBACK' ;

    var init = function(url){
      $http.jsonp(url)
        .success(function (data) {
          $scope.events = data.resultsPage.results.event;
          console.log(data);
        }).
        error(function(){
          console.log('failure');
        });
    };

    $scope.hideplaylist = function(){
      this.$el.slideUp("slow");
      this.$el.empty();
    };


    init(url);
}]);


   