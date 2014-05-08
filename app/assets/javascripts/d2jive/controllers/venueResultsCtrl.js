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

    // $scope.tracks = function(artistName){
    //     //ng-click="tracks(artist.displayName)"
    //   var artistTracks = spotifyFactory.getArtistTracks(artistName);
      
    //   // var spotifyIframe = $('spotifyIframe');
    //   // $scope.show_tracks = $sce.trustAsHtml("<iframe src='https://embed.spotify.com/?uri=spotify:trackset:Playlist:"+artistTracks.spotifyTracks + "'"+ 
    //   //   "&theme=white'width='300' height='300'frameborder='0' allowtransparency='true'></iframe>")
    //   // spotifyIframe.html("<iframe src='https://embed.spotify.com/?uri=spotify:trackset:Playlist:{{artistTracks}&theme=white'
    //   // width='300' height='300'frameborder='0' allowtransparency='true'></iframe>")
    //   // $compile(spotifyIframe.contents())($scope);
    //   // $scope.artistTracks = trackArray;
    //   console.log(artistTracks)
    // };

    init(url);
}]);


    // var spotifyUrl = "http://ws.spotify.com/search/1/track.json?callback=JSON_CALLBACK&q=";

  // $http.jsonp(spotifyUrl + encodeURIComponent(artistName))
      //   .success(function (data) {
      //     var trackArray = [];
      //       var tracks = data.tracks.slice(0,9);
      //       for (var track in tracks){
      //         grabbedTrack = tracks[track].href.slice(
      //           14, tracks[track].href.length);
      //         trackArray.push(grabbedTrack);
      //       }
      //       // $scope.artistTracks = trackArray;
      //     console.log(data);

      //      <div ng-bind-html="show_tracks"></div>

