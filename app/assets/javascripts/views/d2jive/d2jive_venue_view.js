D2Jive.Views.D2JiveVenueView = Backbone.View.extend({

  tagName: 'li',

  events: {
    'click a': 'getShows',

  },

  template: HandlebarsTemplates['d2jive/venue_view'],
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    var singleVenue = this.model.toJSON();
    this.$el.html(this.template(singleVenue));
    return this; 
  },

  getShows: function(event){
    this.$el.empty();
    event.currentTarget.toggle();
    // event.preventDefault();
    // var query = window.location.search;
    // var location = query.split("=")[1].replace(/\+/g, '%20');
    // var venueId = event.currentTarget.id;
    // Backbone.history.navigate('venue?address='+ location + '?venue=' + venueId+'', {trigger: true});
  },


});