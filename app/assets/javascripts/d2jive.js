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
    
    "": "home",
    "venues": "localeResults",
    // "/venue" : "showResults",

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);
  },

  localeResults: function(){
     alert("we made it");
    // var venue = {
    //   name: "test",
    //   id: 1
    // };
    // var view = new D2Jive.Views.D2JiveLocaleResults({});
    // $('#searchContainer').append(view.render().el); 
  },

  showResults: function(venueId){
    // var newview = new D2Jive.Views.D2JiveVenueResults({});
  }

});

// contributing files:
// d2jive_index.js
//   index.hbs
// d2jive_locale_results.js
//   locale_results.hbs
// d2jive_venue_results.js
//   venue_results.hbs

$(document).ready(function(){
  D2Jive.initialize();
});

