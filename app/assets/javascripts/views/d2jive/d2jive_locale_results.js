D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  tagName: 'ul',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click a': 'getShows',

  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', _.throttle(this.render, (2000)));
  },

  render: function(){
    this.$el.empty();
    var i=0;  
    _.each(
      this.collection.models,
      function(venue){
        i++;
        this.$el.append(new D2Jive.Views.D2JiveVenueView({model: venue}).render().$el);
      },
      this
    );
    console.log(i); 
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





