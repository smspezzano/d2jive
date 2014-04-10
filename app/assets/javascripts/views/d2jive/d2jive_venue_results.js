D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  
  tagName: 'ul',
  className: 'venueEvents small-6 columns',

  template: HandlebarsTemplates['d2jive/venue_results'],

  initialize: function (options) {
    this.venuePhoto = options.venue;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.venuePhoto , 'sync', this.showPhoto);  
  },

  showPhoto: function(){
    var singleVenue = this.venuePhoto.models[0].toJSON();
    $(this.el).before(this.template(singleVenue));
  },

  render: function(){
    //this.$el.empty();
     
    _.each(
      this.collection.models,
      function(show){
        this.$el.append(new D2Jive.Views.D2JiveEventView({model: show}).render().$el);
      },
      this
    );
    return this; 
  }

});