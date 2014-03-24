D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'submit #search': 'getVenues',
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/search/venues.json?query="
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getVenues: function(event){
    event.preventDefault();

    address = $("#city").val().replace(/\s+/g, ',');

    searchURL = this.urls.base + address + "&apikey=4ash2icfOuY4R7v5";
    $.ajax({
      type: 'get',
      url: searchURL,
    }).done(function(data){
      
      var eachVenue;
      var venueView;
      var venueArray = data.resultsPage.results.venue;
      for (var venue in venueArray){ 
        eachVenue = {
          name: venueArray[venue].displayName, 
          id: venueArray[venue].id,
        };
        venueView = new D2Jive.Views.D2JiveLocaleResults({ model: eachVenue });
        $('#container').append(venueView.render().el);      
      }
    });
  Backbone.history.navigate('venues', {trigger: true});
  }
});




