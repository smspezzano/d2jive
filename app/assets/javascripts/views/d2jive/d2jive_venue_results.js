D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  
  tagName: 'ul',
  className: 'venueEvents',

  template: HandlebarsTemplates['d2jive/venue_results'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    this.$el.empty(); 
    _.each(
      this.collection.models,
      function(show){
        this.$el.append(new D2Jive.Views.D2JiveEventView({model: show}).render().$el);
      },
      this
    );
    return this; 
  }

});