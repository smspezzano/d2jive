D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({

  tagName: 'ul',

  className: 'mosaic-row stack-767',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click a': 'getShows',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', _.throttle(this.render, (2000)));
  },

  render: function(){
    this.$el.empty();
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
    this.stopListening(this.collection);
    var query = window.location.search;
    var location = query.split("=")[1].replace(/\+/g, '%20');
    var venueId = event.currentTarget.id;
    Backbone.history.navigate('venue?address='+ location + '?venue=' + venueId+'', {trigger: true});
  }

});
