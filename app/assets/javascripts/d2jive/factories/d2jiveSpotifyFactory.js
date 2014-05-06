d2jive.factory('spotifyFactory', ['$http','$q', function($http, $q){

  var factory = {}

  factory.getArtistTracks = function(artistName){

    var tracks = {}

    var spotifyUrl = "http://ws.spotify.com/search/1/track.json?q=";

    var deferred = $q.defer();

    var getTracks = function(artistName){
      $http.get(spotifyUrl + encodeURIComponent(artistName))
        .success(function (data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };
    
  
    // tracks.spotifyTrakcs = getTracks(artistName);
    var spotifyTracks = getTracks(artistName);
    spotifyTracks.then(function(result){
        var trackArray = [];
        var tracks = result.tracks.slice(0,9);
        for (var track in tracks){
          grabbedTrack = tracks[track].href.slice(
            14, tracks[track].href.length);
          trackArray.push(grabbedTrack);
        }  
      tracks.spotifyTrakcs = trackArray;    
    });

    return tracks;

  }


return factory;


}]);
