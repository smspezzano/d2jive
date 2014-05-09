d2jive.directive('getSpotifyTracks', ['spotifyFactory', '$compile', '$sce', '$q',
 function (spotifyFactory, $compile, $sce, $q) { 
  'use strict';
  
  // var getTracks = function(artistName){
  //   var deferred = $q.defer();
  //   var spotifyTracks = spotifyFactory.getArtistTracks(artistName)
  //   deferred.resolve(spotifyTracks);
  //   return deferred.promise;
  // }


  return {
    scope: {
      artistName: '@'
    },
    compile: function(tElement, tAttrs, artistName){

      return function(scope, iElement) {
        iElement.click(function(){

          var tracks = spotifyFactory.getTracks(scope.artistName).then(function(data) {
            var trackArray = [];
            var tracks = data.data.tracks.slice(0,9);
            for (var track in tracks){
              var grabbedTrack = tracks[track].href.slice(14,tracks[track].href.length);
              trackArray.push(grabbedTrack);
            }  
            var t = '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Playlist:' + trackArray.toString()+ '"width="300" height="300" frameborder="0" allowtransparency="true"></iframe>';
            iElement.after($compile(t)(scope));
          });
          
          // var tracks = getTracks(scope.artistName);
          // tracks.then(function(tracks){
          //   var t = '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Playlist:"' + tracks.spotifyTracks+ 'width="300" height="300" frameborder="0" allowtransparency="true"></iframe>';
          //   iElement.after($compile(t)(scope));
          // });
        });
      }
    }
  }

}]);


// <!-- <a ng-href='' class="button [radius round]" id="artist" ng-click='loadTracks(artist.displayName)'>Discover {{artist.displayName}}<br> -- {{artist.billing}}</a>   -->