d2jiveControllers.controller('LocalResultsCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams){

  var city = $routeParams.locale

  var baseUrl = 'http://api.songkick.com/api/3.0/search/venues.json?';

  var data = '&query=' + 'san%20francisco%20ca' + '&per_page=20';

  var apiKey = 'apikey=4ash2icfOuY4R7v5'

  var url = baseUrl+ apiKey + data + '&jsoncallback=JSON_CALLBACK' ;

  
  var init = function(url){
    $http.jsonp(url)
      .success(function (data) {
        $scope.venues = data.resultsPage.results.venue;
        console.log(data);
      }).
      error(function(data){
        console.log('no');
        console.log(data);
      });
  }

  init(url);


  // var init = function(baseUrl, city){
  //   $http.jsonp(baseUrl, [
  //     {
  //       per_page: 20,
  //       apikey: '4ash2icfOuY4R7v5',
  //       query: city
  //     }
  //   ])
  //   .success(function (data) {
  //     $scope.venues = data.resultsPage.results.venue;
  //   });
  // }


}]);
