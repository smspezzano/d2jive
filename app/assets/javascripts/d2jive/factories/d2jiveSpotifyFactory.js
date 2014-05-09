d2jive.factory('spotifyFactory', ['$http', function($http){

  'use strict';

  var SpotifyFactory = {};

    SpotifyFactory.spotifyUrl = 'http://ws.spotify.com/search/1/track.json?q=';

    SpotifyFactory.getTracks = function(artistName){
       var promise = $http.get(SpotifyFactory.spotifyUrl + encodeURIComponent(artistName))
        .success(function (result){
          var trackArray = [];
          var tracks = result.tracks.slice(0,9);
          for (var track in tracks){
            var grabbedTrack = tracks[track].href.slice(14,tracks[track].href.length);
            trackArray.push(grabbedTrack);
          }  
          tracks.spotifyTracks = trackArray;  
          console.log(tracks.spotifyTracks);
          return tracks;
        });
      return promise;
   };
  return SpotifyFactory;
}]);
