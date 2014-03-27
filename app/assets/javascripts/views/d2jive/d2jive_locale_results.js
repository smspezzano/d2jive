D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  tagName: 'ul',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click .venue': 'getShows',
  },

  initialize: function () {
    var that = this;

    this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.photoModel, 'sync', this.render); 
  },

  render: function(){
  
    _.each(
      this.collection.models,
      function(venue){
        this.$el.append(new D2Jive.Views.D2JiveVenueView({model: venue}).render().$el);
      },
      this
    );
    
    return this; 
  },

  // Backbone.history.navigate('venue', {trigger: true});

});





