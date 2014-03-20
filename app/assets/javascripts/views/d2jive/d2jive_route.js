D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    "": "home"
    // "/localeresults": "localeresults"
  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#searchContainer').html(view.render().el);  
  },

  // localeresults: function(){

  // }

});