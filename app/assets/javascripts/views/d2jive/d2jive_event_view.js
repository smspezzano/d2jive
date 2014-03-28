D2Jive.Views.D2JiveEventView = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/event_view'],

  events: {
    'click button': 'getTracks',
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
    // for rdio
    // var flashvars = {
    //   'playbackToken': "GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=",
    //   'domain': "localhost",
    //   'listener': 'callback_object'    // the global name of the object that will receive callbacks from the SWF
    // };

    // var params = {
    //   'allowScriptAccess': 'always'
    // };

    // swfobject.embedSWF('http://www.rdio.com/api/swf/',// the location of the Rdio Playback API SWF
    //   'apiswf', // the ID of the element that will be replaced with the SWF
    //   1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);
    event.preventDefault();
    var artistName = $(event.currentTarget).data("name");
    Backbone.history.navigate('event?artist='+ artistName);
    this.showTracks(artistName);
  },

  showTracks: function(artistName){
    var trackCollection = new D2Jive.Collections.Tracks( [], {artistName: artistName});
    var trackResults = new D2Jive.Views.D2JiveTrackResults({ collection: trackCollection});
    this.$el.append(trackResults.render().el);
  }
});