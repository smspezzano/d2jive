D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {},

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/venues/"
  },

});