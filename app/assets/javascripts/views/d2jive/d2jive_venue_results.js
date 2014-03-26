D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    'submit .artist': 'getTracks',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    var eventObject = this.collection.toJSON();
    this.$el.html(this.template({events: eventObject}));
    return this; 
  },

  getTracks: function(event){

    var flashvars = {
      'playbackToken': "GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=",
      'domain': "localhost",
      'listener': 'callback_object'    // the global name of the object that will receive callbacks from the SWF
    };

    var params = {
      'allowScriptAccess': 'always'
    };

    swfobject.embedSWF('http://www.rdio.com/api/swf/',// the location of the Rdio Playback API SWF
      'apiswf', // the ID of the element that will be replaced with the SWF
      1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);
    event.preventDefault();

    var artistName = $(".artistName").val().replace(/\s+/g, ',');

    // response[tracks].first(10).each do |track|
    //   grabbedTrack = track.href.slice(14..track.href.length)
    //   tackArray.push(grabbedTrack)
    // end
    var trackObejct;
    var trackArray = [];
    var spotifyArray;
    var grabbedTrack;
    var url = "http://ws.spotify.com/search/1/track.json?q=";
    var trackUrl = url + artistName;
    $.ajax({
    type: 'get',
    url: trackUrl,
    })
    .done(function(data){
      console.log(data);
      spotifyArray = data.tracks.slice(0,9);
      for (var track in spotifyArray){
        grabbedTrack = spotifyArray[track].href.slice(14, spotifyArray[track].href.length);
        trackArray.push(grabbedTrack);
        console.log(trackArray);
      }

      
      trackObejct = {
      tracks: trackArray
      };

      trackView = new D2Jive.Views.D2JiveTrackResults({model: trackObejct});
      $('#container').append(trackView.render().el);
      trackArray.length = 0;
    })
    .fail(function() {
      console.log( "error" );
    });
  }

});