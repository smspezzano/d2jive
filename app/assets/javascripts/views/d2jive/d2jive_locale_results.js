D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  div: 'searchResults',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click .venue': 'getShows',
  },

  render: function(){
    alert("we have reached D2Jive_locale_results.js");
    $(this.el).html(this.template());
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/venues/"
  },

  getShows: function(event){
  event.preventDefault();

  venueId = $(".venueId").val();

  searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
  $.ajax({
    type: 'get',
    url: searchURL,
  }).done(function(data){
    var eachVenue;
    var venueArray = data.resultsPage.results.event;
    for (var venue in venueArray){ 
      eachEvent = {
        name: venueArray[venue].displayName, 
        uri: venueArray[venue].uri,
        artists: venueArray[venue].performance
      };
    }
    var eventView = new D2Jive.Views.D2JiveVenueResults({model: eachEvent});
    $('#searchResults').html(eventView.render().el);  
  });
  }
});
