D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  id: "searchResults",

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'bind #venueId': 'getShows',
  },

  initialize: function () {
    // ('#searchResults').bind(this.getVenues);
    // vent.on('venues:getVenues', this.getVenues, this);
  },

  render: function(){
    console.log("we are on the venue results page");
    $(this.el).html(this.template());
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/venues/"
  },

  getShows: function(event){
  alert("we've reached the function");
  event.preventDefault();

  getShows.prototype.getTracks = function(artistName, callback){
    var filtered_response;
    var url = "http://ws.spotify.com/search/1/track.json?q=";
    var trackUrl = url + artistName;
    $.ajax({
    type: 'get',
    url: trackUrl,
    success: function(response){
        filtered_response = response.tracks;
        callback(filtered_response);
      }
    })
    .fail(function() {
      console.log( "error" );
    });
  };

  // var spotifyResults = function(result){
  //   trackArray = result;
  //   return trackArray;
  // };

  venueId = $("#venueId").val();

  searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
  $.ajax({
    type: 'get',
    url: searchURL,
  }).done(function(data){
    var eachVenue;
    var eventView;
    var artistArray=[];
    var trackArray;
    var eventArray = data.resultsPage.results.event;
    for (var ev in eventArray){
      for (var artist in eventArray[ev].performance){
        var artistObject = {};
        artistObject['name'] = eventArray[ev].performance[artist].displayName;
        artistObject['billing'] = eventArray[ev].performance[artist].billing;
        artistArray.push(artistObject);
        var artistName = eventArray[ev].performance[artist].displayName.replace(/\s+/g, '%20');
        getTracks(artistName, function(result){
          trackArray = result;
          return trackArray;
        });
      }

      eachEvent = {
        name: eventArray[ev].displayName, 
        uri: eventArray[ev].uri,
        artists: artistArray,
        tracks: trackArray
      };
      eventView = new D2Jive.Views.D2JiveVenueResults({model: eachEvent});
      $('#container').append(eventView.render().el);
       artistArray.length = 0;
    }
  });
  }
});





