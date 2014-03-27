window.D2Jive = {
  Views: {},
  Routers: {},
  Events: {},
  Models: {},
  Collections: {},

  initialize: function() {
    D2Jive.router = new this.Router();
    Backbone.history.start({pushState: true});
  },

};

var vent = _.extend({}, Backbone.Events);

// console.log( vent );
D2Jive.Router = Backbone.Router.extend({

  routes: {
    
    "": "home",                     // #
    "venues": "localeResults",      // #venues/san+francisco+ca
    "venue" : "showResults",        // #venues/san+francisco+ca/7869/events
    "event" : "getTracks"

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('.bodyContainer').html(view.render().el);
  },

  localeResults: function(params){
    var location = params.split("=")[1];
      
    var collection = new D2Jive.Collections.Venues( [], { location: location });
    var newResults = new D2Jive.Views.D2JiveLocaleResults({collection: collection});
    $('.bodyContainer').html(newResults.render().el);
  },

  showResults: function(params){
    var venueId = params.split("=")[2];
    var eventCollection = new D2Jive.Collections.Vents( [], {venueId: venueId});
    var eventResults = new D2Jive.Views.D2JiveVenueResults({ collection: eventCollection});
    $('.bodyContainer').append(eventResults.render().el);
  },

  getTracks: function(params){
    var artistName = params.split("=")[1].replace(/\s+/g, ',');
    var trackCollection = new D2Jive.Collections.Tracks( [], {artistName: artistName});
    var trackResults = new D2Jive.Views.D2JiveTrackResults({ collection: trackCollection});
    $('.bodyContainer').append(trackResults.render().el);
  }


});

// Create a Venue Model that gets created on API call

D2Jive.Models.Venue = Backbone.Model.extend({
  defaults : {
    name: '',
    id: '',
  },
});

// Create a collection of venus from Venue model

D2Jive.Collections.Venues = Backbone.Collection.extend({
  initialize: function(attributes, options){
    this.city = options.location;
    this.fetch();
  },
  model: D2Jive.Models.Venue,
  apikey: "4ash2icfOuY4R7v5" ,
  url: "http://api.songkick.com/api/3.0/search/venues",
  sync: function(method, model, options){
    var that = this;
      var params = _.extend({
          type: 'GET',
          url: that.url +  ".json?query=" + that.city + '&apikey=' + that.apikey,
      }, options);

    return( $.ajax(params));
  },
  parse: function(resp, options){
    return resp.resultsPage.results.venue;
  }, 
});


// below is an example used to test our collections request
// window.venues20 = new D2Jive.Collections.Venues([], {location: "San, francisco, CA"} );
// console.log(venues20.toJSON());

// Create a Event Model that gets changed on API call

D2Jive.Models.Vents = Backbone.Model.extend({
  
  defaults : {
    name: '',
    uri: '',
    artists: '',
  }, 

});

//Create a collection of Events with event Model on API call

D2Jive.Collections.Vents = Backbone.Collection.extend({
  initialize: function(attributes, options){
    this.venueId = options.venueId;
    this.fetch();
  },

  model: D2Jive.Models.Vents,
  apikey: "4ash2icfOuY4R7v5" ,
  url: "http://api.songkick.com/api/3.0/venues/",
  sync: function(method, model, options){
    var that = this;
      var params = _.extend({
          type: 'GET',
          url: that.url +  that.venueId + '/calendar.json?apikey=' + that.apikey,
      }, options);

    return( $.ajax(params));
  },
  parse: function(resp, options){
    return resp.resultsPage.results.event;
  }, 

});

// Create a Tracks Model that gets changed on API call

D2Jive.Models.Tracks = Backbone.Model.extend({
  
  defaults : {
    href: '',
  }, 

});

D2Jive.Collections.Tracks = Backbone.Collection.extend({
  initialize: function(attributes, options){
    this.artistName = options.artistName;
    this.fetch();
  },

  model: D2Jive.Models.Tracks,
  url: "http://ws.spotify.com/search/1/track",
  sync: function(method, model, options){
    var that = this;
      var params = _.extend({
          type: 'GET',
          url: that.url + '.json?q=' + that.artistName,
      }, options);

    return( $.ajax(params));
  },
  parse: function(resp, options){
    spotifyResp = resp.tracks.slice(0,9);
    return spotifyResp;
  }, 

});

// other contributing files:
// d2jive_index.js
//   index.hbs
// d2jive_locale_results.js
//   locale_results.hbs
// d2jive_venue_results.js
//   venue_results.hbs

$(document).ready(function(){
  D2Jive.initialize();
});

