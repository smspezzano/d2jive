D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'venueResults',

  template: HandlebarsTemplates['d2jive/venue_results'],

  events: {
    'submit .artist': 'getTracks',
  },

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  },

  getTracks: function(event){
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