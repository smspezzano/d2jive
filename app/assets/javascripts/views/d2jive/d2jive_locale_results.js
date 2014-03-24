D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  id: 'container',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click .venue': 'getShows',
  },

  initialize: function () {
    console.log("we are on the venue results page");
    // ('#searchResults').bind(this.getVenues);
    // vent.on('venues:getVenues', this.getVenues, this);
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/venues/"
  },

  getShows: function(event){
  event.preventDefault();

  var venueId = $("#venueId").val();

  searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
  $.ajax({
    type: 'get',
    url: searchURL,
  }).done(function(data){
    var eachVenue;
    var eventView;
    var artistArray=[];
    var eventArray = data.resultsPage.results.event;
    for (var ev in eventArray){
      for (var artist in eventArray[ev].performance){
        var artistObject = {};
        artistObject['name'] = eventArray[ev].performance[artist].displayName;
        artistObject['billing'] = eventArray[ev].performance[artist].billing;
        artistArray.push(artistObject);
      }

      eachEvent = {
        name: eventArray[ev].displayName, 
        uri: eventArray[ev].uri,
        artists: artistArray,
      };
      eventView = new D2Jive.Views.D2JiveVenueResults({model: eachEvent});
      $('#container').append(eventView.render().el);
       artistArray.length = 0;
    }
  });
  }
});




