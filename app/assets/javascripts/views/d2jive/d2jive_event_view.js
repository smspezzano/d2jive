D2Jive.Views.D2JiveEventView = Backbone.View.extend({
  
  tagName: 'li',

  template: HandlebarsTemplates['d2jive/event_view'],

  events: {
    'click a': 'getTracks',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render); 
  },

  render: function(){
    var eventObject = this.model.toJSON();
    this.$el.html(this.template(eventObject));
    return this; 
  },

  getTracks: function(event){
    event.preventDefault();
    var artistName = $(event.currentTarget).data("name");
    // Backbone.history.navigate('event?artist='+ artistName);
    this.showTracks(artistName);
  },

  showTracks: function(artistName){
    var trackCollection = new D2Jive.Collections.Tracks( [], {artistName: artistName});
    var trackResults = new D2Jive.Views.D2JiveTrackResults({ collection: trackCollection});
    this.$el.append(trackResults.render().el);
  }
});