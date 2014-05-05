d2jiveCtrls.controller('LocalResultsCtrl', ['$scope', '$htttp', function($scope, $http){

  $scope.getLocaleVenues = function(locale){
   $http.jsonp('http://api.songkick.com/api/3.0/search/venues.json&per_page=20', {
      params: {
        method: "POST",
        data: {"query=": locale},
        apikey: '4ash2icfOuY4R7v5',
        callback: 'jsoncallback'
      }
    })
    .success(function (data) {
        $scope.venues = data.resultsPage.results.venue;
    });
  }

}]);
