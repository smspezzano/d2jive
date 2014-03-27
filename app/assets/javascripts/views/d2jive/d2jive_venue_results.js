D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    'click button': 'getTracks',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    var eventObject = this.collection.toJSON();
    this.$el.append(this.template({events: eventObject}));
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
    Backbone.history.navigate('event?artist='+ artistName, {trigger: true});

  }

});