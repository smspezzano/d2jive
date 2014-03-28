D2Jive.Views.D2JiveTrackResults = Backbone.View.extend({
  
  className: 'spotifyPlaylist',

  template: HandlebarsTemplates['d2jive/tracks'],

  events: {
    'click a': 'hidePlaylist'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    this.$el.empty();
    this.$el.slideDown("slow");
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

  hidePlaylist: function(){
    this.$el.slideUp("slow");
    this.$el.empty();
  },

});



