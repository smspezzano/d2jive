window.D2Jive = {
  Models: {},
  Views: {},
  Routers: {},
  Events: {},

  initialize: function() {
    D2Jive.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  },
};



// contributing files:
// d2jive_router.js
// d2jive_index.js
//   index.hbs
// d2jive_locale_results.js
//   locale_results.hbs
// d2jive_venue_results.js
//   venue_results.hbs


$(document).ready(function(){
  D2Jive.initialize();
});