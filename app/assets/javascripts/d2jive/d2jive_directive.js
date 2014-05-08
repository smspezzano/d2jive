d2jive.directive('getSpotifyTracks', ['spotifyFactory', '$compile', '$sce', '$q',
 function (spotifyFactory, $compile, $sce, $q) { 
  'use strict';
  
  var getTracks = function(artistName){
    var deferred = $q.defer();
    var spotifyTracks = spotifyFactory.getArtistTracks(artistName)
    deferred.resolve(spotifyTracks);
    return deferred.promise;
  }


  return {
    scope: {
      artistName: '@'
    },
    compile: function(tElement, tAttrs, artistName){

      return function(scope, iElement) {
        iElement.click(function(){
          
          var tracks = getTracks(scope.artistName);
          tracks.then(function(tracks){
            var t = '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Playlist:"' + tracks.spotifyTracks+ 'width="300" height="300" frameborder="0" allowtransparency="true"></iframe>';
            iElement.after($compile(t)(scope));
          });
        });
      }
    }
  }

}]);


// <!-- <a ng-href='' class="button [radius round]" id="artist" ng-click='loadTracks(artist.displayName)'>Discover {{artist.displayName}}<br> -- {{artist.billing}}</a>   -->