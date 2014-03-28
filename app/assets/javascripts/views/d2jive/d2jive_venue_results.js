D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    this.$el.empty();
    var i=0;  
    _.each(
      this.collection.models,
      function(show){
        i++;
        this.$el.append(new D2Jive.Views.D2JiveEventView({model: show}).render().$el);
      },
      this
    );
    console.log(i); 
    return this; 
  },


});