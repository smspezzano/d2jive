D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  id: 'searchResults',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'submit .venue': 'getShows',
  },

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/venues/"
  },

  getShows: function(event){
  event.preventDefault();

  var getTracks = function(artistName){
    var url = "http://ws.spotify.com/search/1/track.json?q=foo";
    //var trackUrl = url + artistName;
    $.ajax({
    type: 'get',
    url: url,
    })
    .done(function(data){
      return data.tracks;
    })
    .fail(function() {
      console.log( "error" );
    });
  };

  venueId = $(".venueId").val();

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
        trackArray = getTracks(artistName);
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

