d2jive.directive('getSpotifyTracks', ['spotifyFactory', '$compile', '$sce',
 function (spotifyFactory, $compile, $sce) { 
  'use strict';
//      <div get-spotify-tracks="artist.displayName"></div>


  //var spotifyUrl = "http://ws.spotify.com/search/1/track.json?callback=JSON_CALLBACK&q=";
  return {
    // restrict: 'AEC',
    scope: {
      artistName: '@'
    },
    // template: '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Playlist:{{artistTracks}}" width="300" height="300" frameborder="0" allowtransparency="true"></iframe>',
    // // templateUrl: 'assets/d2jive/templates/artistTracks.html',
    // controller: function( $scope, $element){

    // }
    compile: function(tElement, tAttrs, artistName){

      return function(scope, iElement) {
        iElement.click(function(){
          var tracks = spotifyFactory.getArtistTracks(scope.artistName);
          var t = '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Playlist:"' + tracks.spotifyTracks+ 'width="300" height="300" frameborder="0" allowtransparency="true"></iframe>';
          iElement.after($compile(t)(scope));
        });
      }
    }
    // link: function(scope, element, attrs, ctrl){
    //   scope.$watch('artist.displayName', function(displayName, oldVal){
    //     if (displayName === oldVal) { 
    //       return 
    //     } else {
    //       spotifyFactory.getArtistTracks(displayName);
    //     }
    //   });
    // }
  }

}]);


// <!-- <a ng-href='' class="button [radius round]" id="artist" ng-click='loadTracks(artist.displayName)'>Discover {{artist.displayName}}<br> -- {{artist.billing}}</a>   -->