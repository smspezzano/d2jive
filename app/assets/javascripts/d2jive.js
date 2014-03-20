window.D2Jive = {
  Views: {},
  Routers: {},

  initialize: function() {
    D2Jive.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});
  }
};

$(document).ready(function(){
  D2Jive.initialize();
});

