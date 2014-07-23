D2Jive.Views.D2JiveVenueView = Backbone.View.extend({

  tagName: 'li',

  className: 'venueBox cell cell-5',

  events: {

  },

  template: HandlebarsTemplates['d2jive/venue_view'],
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);

  },

  render: function(event){
    var singleVenue = this.model.toJSON();
    this.$el.html(this.template(singleVenue));

    return this;
  }

});