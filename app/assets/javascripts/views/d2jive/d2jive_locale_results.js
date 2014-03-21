D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  id: 'searchResults',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click .venue': 'getshows',
  },

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  },

  urls: {
    base: "http://api.jambase.com/venues?id="
  },

  getShows: function(event){
  event.preventDefault();

  venueId = $(".venue").val();

  searchURL = urls.base + venueId + "&api_key=eh8ayaj77te8zgaru9g4bzgx";
    $.ajax({
      type: 'get',
      url: searchURL,
    }).done(function(data){
      var view = new D2Jive.Views.D2JiveVenueResults(data);
      $('#container').html(view.render().el);  
    });

  }

});