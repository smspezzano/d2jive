D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    
    "": "home",
    "/venues": "localeResults"

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);
  },

  localeResults: function(){
    var view = new D2Jive.Views.D2JiveLocaleResults({});
    $('#searchResults').append(view.render().el); 
  },


});