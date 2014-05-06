d2jive.directive('getSpotifyTracks', [function () { 
  
//      <div get-spotify-tracks="artist.displayName"></div>


  var spotifyUrl = "http://ws.spotify.com/search/1/track.json?callback=JSON_CALLBACK&q=";

  return {
    restrict: 'AEC',
    scope: {
      artistName: '='
    },
    templateUrl: 'assets/d2jive/templates/artistTracks.html',
    controller: ['$scope', '$http', function($scope, $http){
      $scope.getTracks = function(artistName){
        $http.jsonp(spotifyUrl + encodeURIComponent(artistName))
          .success(function (data) {
            var trackArray = [];
            var tracks = data.tracks.slice(0,9);
            for (var track in tracks){
              grabbedTrack = tracks[track].href.slice(
                14, tracks[track].href.length);
              trackArray.push(grabbedTrack);
            }
            $scope.artistTracks = trackArray;
            console.log(data);
          });
      };
    }],
    link: function(scope, element, attrs, ctrl){
      scope.$watch('artist.displayName', function(displayName){
        if (displayName){
          scope.getTracks(displayName);
        }
      })
    }
  }

}]);


// <!-- <a ng-href='' class="button [radius round]" id="artist" ng-click='loadTracks(artist.displayName)'>Discover {{artist.displayName}}<br> -- {{artist.billing}}</a>   -->