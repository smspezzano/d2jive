D2Jive.Views.D2JiveTrackResults = Backbone.View.extend({
  className: 'trackResults',

  template: HandlebarsTemplates['d2jive/tracks'],

  events: {},

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    this.$el.empty();
    var spotifyObject = this.collection.toJSON();
    var trackArray = [];
    var grabbedTrack;
    for (var track in spotifyObject){
      grabbedTrack = spotifyObject[track].href.slice(14, spotifyObject[track].href.length);
      trackArray.push(grabbedTrack);
    }
    trackObject = {
      tracks: trackArray
    };
    this.$el.append(this.template(trackObject));
    return this; 
  },

});



