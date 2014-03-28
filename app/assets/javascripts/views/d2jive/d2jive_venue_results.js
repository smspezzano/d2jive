D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  

  tagName: 'ul',
  className: 'venueEvents',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    'click button': 'getTracks',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    var eventObject = this.collection.toJSON();
    this.$el.append(this.template({events: eventObject}));
    return this; 
  },

  getTracks: function(event){
    event.preventDefault();
    var artistName = $(event.currentTarget).data("name");
    Backbone.history.navigate('event?artist='+ artistName, {trigger: true});

  }

});