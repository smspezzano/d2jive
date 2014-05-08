d2jive.factory('spotifyFactory', ['$http','$q', function($http, $q){

  var factory = {}

  factory.getArtistTracks = function(artistName){

    var tracks = {}

    var spotifyUrl = "http://ws.spotify.com/search/1/track.json?q=";

    // var deferred = $q.defer();

    var getTracks = function(artistName){
      var trackArray = [];
      $http.get(spotifyUrl + encodeURIComponent(artistName))
        .success(function (data) {
          // deferred.resolve(data);
          var tracks = data.tracks.slice(0,9);
          for (var track in tracks){
            grabbedTrack = tracks[track].href.slice(
            14, tracks[track].href.length);
            trackArray.push(grabbedTrack);
          }  
        });
      return trackArray;
    };
    
  
    // tracks.spotifyTrakcs = getTracks(artistName);
    var spotifyTracks = getTracks(artistName);
    tracks.spotifyTracks = spotifyTracks;  
    // spotifyTracks.then(function(result){
    //     var trackArray = [];
    //     var tracks = result.tracks.slice(0,9);
    //     for (var track in tracks){
    //       grabbedTrack = tracks[track].href.slice(
    //         14, tracks[track].href.length);
    //       trackArray.push(grabbedTrack);
    //     }  
    //   tracks.spotifyTracks = trackArray;  
    //   console.log(tracks.spotifyTracks); 
    // });

    return tracks;
    console.log(tracks.spotifyTracks); 


  }


return factory;


}]);
