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
    "/venues/:location": "localeResults"

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);
  },

  localeResults: function(venueLocation){
    vent.trigger('venues:get', venueLocation);
    // var view = new D2Jive.Views.D2JiveLocaleResults({});
    // $('#searchResults').append(view.render().el); 
  },

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


// <ul>
//   <li>
//   {{name}}
//   <button class='venueId' type=hidden value={{id}}>"View upcoming Show"</button>
//   </li>
// </ul>
// </div>