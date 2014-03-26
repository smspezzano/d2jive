D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  className: 'small-12 large-12 columns results_container',
  id: 'overlay',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click .venue': 'getShows',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    // this.listenTo(this.photoCollection, 'sync', this.render); 
  },

  render: function(){
    var venueObject = this.collection.toJSON();
    this.$el.html(this.template({venues: venueObject}));
    
    return this; 
  },

  // Backbone.history.navigate('venue', {trigger: true});

});





