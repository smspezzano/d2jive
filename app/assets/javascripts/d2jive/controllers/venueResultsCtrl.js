d2jiveControllers.controller('VenueResultsCtrl', ['$scope','$http','$routeParams',
  function($scope, $http, $routeParams){
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


    var spotifyUrl = "http://ws.spotify.com/search/1/track.json?callback=JSON_CALLBACK&q=";

    var loadTracks = function(artistName){
      $http.jsonp(spotifyUrl + encodeURIComponent(artistName))
        .success(function (data) {
          $scope.tracks = data.tracks.slice(0,9);
          var tracks = data.tracks.slice(0,9)
          console.log(data);
          $scope.html = "<iframe src='https://embed.spotify.com/?uri=spotify:
          trackset:Playlist:{{tracks}}&theme=white' width='300' height='300' 
          frameborder='0' allowtransparency='true'></iframe>
          <a class='hidePlaylist'>Hide Playlist</a>"
        });
    };

  
    init(url);
}]);