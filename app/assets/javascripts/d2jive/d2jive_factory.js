d2jive.factory('venueFactory', ['$http','$q', function($http, $q){
  var factory = {}

  factory.getVenueInfo = function(venue){

    var newVenue = {}

    var yelpBaseUrl = 'http://api.yelp.com/business_review_search'

    var yelpData = "?term=" + venue.displayName + '&location=' + venue.zip +
      "&ywsid=" + "FMU0kKzY0nkNw61uFSpTfA" + "&category=musicvenues" +
      "&callback=JSON_CALLBACK"

    var yelpUrl = yelpBaseUrl + yelpData

    var deferred = $q.defer();

    var getPhoto = function(yelpUrl){
      $http.jsonp(yelpUrl)
        .success(function (data) {
          // $scope.venues = data.resultsPage.results.venue;
          //return data.businesses[0].photo_url
          deferred.resolve(data);
        }).
        error(function(e){
          console.log("error");
          console.log(e);
        })

      return deferred.promise;
    }

    newVenue.name = venue.displayName;
    newVenue.id = venue.id;
    var photo = getPhoto(yelpUrl);
    photo.then(function(result){
      newVenue.imageUrl = result.businesses[0].photo_url;
    })

    return (newVenue);
  }

  return factory;

}]);


