D2Jive.Views.D2JiveVenueView = Backbone.View.extend({



  template: HandlebarsTemplates['d2jive/venue_view'],

  render: function(){
    var singleVenue = this.model.toJSON();
    this.$el.html(this.template(singleVenue));
    return this; 
  }

});