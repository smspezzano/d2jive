D2Jive.Views.D2JiveVenueView = Backbone.View.extend({

  tagName: 'li',

  template: HandlebarsTemplates['d2jive/venue_view'],
  
  events: {
    'click a': 'getShows',
  },
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function(event){
    var singleVenue = this.model.toJSON();
    this.$el.html(this.template(singleVenue));
    return this;
  },

  alert: function(event){
    
    alert("this is my attr:" + event.currentTarget.id );
  },

  getShows: function(event){
  event.preventDefault();
  var query = window.location.search;
  var location = query.split("=")[1].replace(/\+/g, '%20');
  var venueId = event.currentTarget.id;
  Backbone.history.navigate('venue?address='+ location + '?venue=' + venueId+'', {trigger: true});
  },

});