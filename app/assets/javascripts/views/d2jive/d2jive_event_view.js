D2Jive.Views.D2JiveEventView = Backbone.View.extend({
  
  tagName: 'li',

  template: HandlebarsTemplates['d2jive/event_view'],

  events: {
    'click #artist': 'getArtistName',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render); 
  },

  render: function(){
    this.$el.empty();
    var eventObject = this.model.toJSON();
    this.$el.html(this.template(eventObject));
    return this; 
  },

  getArtistName: function(event){
    event.preventDefault();
    var artistName = $(event.currentTarget).data("name");
    this.showTracks(artistName);
  },

  showTracks: function(artistName){
    var trackCollection = new D2Jive.Collections.Tracks( [], {artistName: artistName});
    var trackResults = new D2Jive.Views.D2JiveTrackResults({ collection: trackCollection});
    this.$el.append(trackResults.render().el);
  }
});