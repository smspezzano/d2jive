D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'localeResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    // 'onload newCity': 'render',
  },

  render: function(){
    $(this.el).html(this.template());
  
  },

});