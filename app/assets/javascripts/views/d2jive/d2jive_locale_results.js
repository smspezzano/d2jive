D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  className: 'small-12 large-12 columns results_container',
  id: 'overlay',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click a': 'getShows',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    var venueObject = this.collection.toJSON();
    this.$el.html(this.template({venues: venueObject}));
    return this; 
  },

  getShows: function(event){
    event.preventDefault();
    var query = window.location.search;
    var location = query.split("=")[1].replace(/\+/g, '%20');
    var venueId = $(event.currentTarget).data("id");
    Backbone.history.navigate('venue?address='+ location + '?venue=' + venueId, {trigger: true});
    $( 'ul li' ).click(function (e) {
      $( 'ul li' ).hide();
      $( this ).show();    
    });
  }
});





