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

  venueId = $(".venueId").val();

  searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
  $.ajax({
    type: 'get',
    url: searchURL,
  }).done(function(data){
    var eachVenue;
    var eventView;
    var venueArray = data.resultsPage.results.event;
    for (var venue in venueArray){ 
      eachEvent = {
        name: venueArray[venue].displayName, 
        uri: venueArray[venue].uri,
        artists: venueArray[venue].performance
      };
      eventView = new D2Jive.Views.D2JiveVenueResults({model: eachEvent});
      $('#container').append(eventView.render().el);  
    }
  });
  }
});
