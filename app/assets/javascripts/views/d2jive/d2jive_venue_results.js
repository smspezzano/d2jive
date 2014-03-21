D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    'click .venue': 'getshows',
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

  venueId = $(".venue").val();

  searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
    $.ajax({
      type: 'get',
      url: searchURL,
    }).done(function(data){
      var view = new D2Jive.Views.D2JiveVenueResults(data);
      $('#container').html(view.render().el);  
    });

  }

});