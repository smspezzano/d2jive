window.D2Jive = {
  Views: {},
  Routers: {},
  Events: {},

  initialize: function() {
    D2Jive.router = new this.Router();
    Backbone.history.start({pushState: true});
  },
};

var vent = _.extend({}, Backbone.Events);

// console.log( vent );
D2Jive.Router = Backbone.Router.extend({

  routes: {
    
    "": "home",                                         // #
    "venues/:location": "localeResults",                // #venues/san+francisco+ca
    "venues/:location/:venue/events" : "showResults",   // #venues/san+francisco+ca/the+fillmore/events

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);
  },

});

// Create a collection of venus from Venue model on API call

var venuesCollection = Backbone.Collection.extend({
  
  initialize: function(){
    console.log("we made it");
  },

  model: venueModel,

  url: '/venues',


});

// var venues1 = new venuesCollection();
// venues1.fetch();


// Create a Venue Model that gets created on API call
var venueModel = Backbone.Model.extend({
   
   // initialize: function(){
   //  var venueView = new D2Jive.Views.D2JiveLocaleResults({model: this.model});
   //  $('#searchResults').append(venueView.render().el);
   //  },

  defaults : {
    location: '',
    name: '',
    id: '',
  },



});

var venue = new venueModel({name: 'World', id:'5748'});

//Create a collection of Events with event Model on API call

var ventsCollection = Backbone.Collection.extend({

});

// Create a Event Model that gets changed on API call

var ventModel = Backbone.Model.extend({
  
  defaults : {
    name: '',
    uri: '',
    artists: '',
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

