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
    
    "": "home",                                              // #
    "venues": "localeResults"                               // #venues/san+francisco+ca
    // "venues/:location/:venue/events" : "showResults",   // #venues/san+francisco+ca/the+fillmore/events

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('.bodyContainer').html(view.render().el);
  },

  localeResults: function(params){
      var self = this;

      var location = params.split("=")[1];
      
      this.collection = new D2Jive.Collections.Venues( [], { location: location });
      this.collection.fetch({
        success: function () {
          var venueObject = self.collection.toJSON();
          var venueName = _.pluck(venueObject, 'displayName');
          var eachVenue = _.each(venueName, function(venue){
             self.photoModel = new D2Jive.Models.Photo([],{location: location, term: venue});
             self.photoModel.fetch();
           });
        }
      });

      var newResults = new D2Jive.Views.D2JiveLocaleResults({collection: this.collection, photoCollection: this.photoCollection });
       $('.bodyContainer').html(newResults.render().el);
  },

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
    // this.fetch();
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

D2Jive.Models.Photo = Backbone.Model.extend({
  defaults: {
    location: '',
    term: '',
    image_url: '',
  },

   initialize: function(attributes, options){
    this.location = options.location;
    this.term = options.term;
    // this.fetch();
  },
  
  apikey: "EcbxC7m7v9bNWZg15Zi1UQ",
  url: "http://api.yelp.com/business_review_search",

  sync: function(method, model, options){
    var that =this;
      var params = _.extend({
        type: 'GET',
        url: that.url + "?term=" + that.term + "&location=" + that.location + "&ywsid=" + that.apikey, 
      }, options);

    return( $.ajax(params));
  },
  parse: function(resp, options){
    return resp.businesses.photo_url;
  }, 


});

D2Jive.Collections.Photos = Backbone.Collection.extend({
  // initialize: function(attributes, options){
  //   this.location = options.location;
  //   this.term = options.venue;
  //   // this.fetch();
  // },
  
  // model: D2Jive.Models.Photo,
  // apikey: "EcbxC7m7v9bNWZg15Zi1UQ",
  // url: "http://api.yelp.com/business_review_search",

  // sync: function(method, model, options){
  //   var that =this;
  //     var params = _.extend({
  //       type: 'GET',
  //       url: that.url + "?term=" + that.term + "&location=" + that.location + "&ywsid=" + that.apikey, 
  //     }, options);

  //   return( $.ajax(params));
  // },
  // parse: function(resp, options){
  //   return resp.businesses.photo_url;
  // }, 
});

// window.venues20 = new D2Jive.Collections.Venues([], {location: "San, francisco, CA"});
// window.venues20 = new D2Jive.Collections.Photos([],{location: location, term: "the fillmore"});
// below is an example used to test our collections request

// console.log(venues20.toJSON());

// Create a Event Model that gets changed on API call

D2Jive.Models.Vent = Backbone.Model.extend({
  
  defaults : {
    name: '',
    uri: '',
    artists: '',
  }, 

});

//Create a collection of Events with event Model on API call

D2Jive.Collections.Vents = Backbone.Collection.extend({

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

