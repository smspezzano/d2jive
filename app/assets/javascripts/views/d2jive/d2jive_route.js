D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    // "/venues": "getVenues",
    "": "home"
  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);  
  },


});