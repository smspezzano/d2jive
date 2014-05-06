d2jiveControllers.controller('LocalResultsCtrl', ['$scope','$http','$routeParams',
  'venueFactory', function($scope, $http, $routeParams, venueFactory){

  var city = $routeParams.locale;

  var baseUrl = 'http://api.songkick.com/api/3.0/search/venues.json?';

  var data = '&query=' + 'san%20francisco%20ca' + '&per_page=20';

  var apiKey = 'apikey=4ash2icfOuY4R7v5';

  var url = baseUrl+ apiKey + data + '&jsoncallback=JSON_CALLBACK' ;

  var venueArray = [];

  var init = function(url){
    $http.jsonp(url)
      .success(function (data) {
        for (var i=0; i < data.resultsPage.results.venue.length; i++) {
          updatedVenue = venueFactory.getVenueInfo(data.resultsPage.results.venue[i]);
          venueArray.push(updatedVenue)
        }
        $scope.venues = venueArray
      }).
      error(function(){
        console.log('failure');
      });
  }

  init(url);

}]);
