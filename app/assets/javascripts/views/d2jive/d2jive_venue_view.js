D2Jive.Views.D2JiveVenueView = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['d2jive/venue_view'],
  
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(){
    var singleVenue = this.model.toJSON();
    this.$el.html(this.template(singleVenue));
    return this; 
  }

});