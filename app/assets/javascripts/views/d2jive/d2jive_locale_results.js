D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  tagName: 'ul',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click a': 'getShows',

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





