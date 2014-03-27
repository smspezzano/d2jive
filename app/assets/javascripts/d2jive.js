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

      var newResults = new D2Jive.Views.D2JiveLocaleResults({collection: this.collection});
       $('.bodyContainer').html(newResults.render().el);
  },

});

// Create a Venue Model that gets created on API call

D2Jive.Models.Venue = Backbone.Model.extend({
  
  defaults: {
    name: '',
    venueId: '',
    image_url: '',
    location:'',
  },

  initialize: function(attributes, options){
    this.attributes.name = attributes.displayName;
    this.attributes.venueId = attributes.id;
    this.attributes.location = attributes.zip;
    this.fetch();
   },
  
   apikey: "EcbxC7m7v9bNWZg15Zi1UQ",
   url: "http://api.yelp.com/business_review_search",


  sync: function(method, model, options){
       var that =this;
       //console.log(this)
      var params = _.extend({
        type: 'GET',
        dataType: 'jsonp',
        url: that.url + "?term=" + that.attributes.name + "&location=" + that.attributes.location + "&ywsid=" + that.apikey +"&category=musicvenues", 
      }, options);

     return( $.ajax(params));
   },
   parse: function(resp, options){
      try{
      this.set({image_url: resp.businesses[0].photo_url});
     return this;
      } catch(e){}


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


     $.ajax(params);


  },
  parse: function(resp, options){
    var venue = resp.resultsPage.results.venue;
    return  venue;
  }, 
});

// // Create a Event Model that gets changed on API call

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

