D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  id: 'localeResults',

  template: Handelbars['d2jive/locale_results'],

  events: {
    'submit #initialSearch': 'getVenues',
  },

  getVenues: function(query){
    
  }
});