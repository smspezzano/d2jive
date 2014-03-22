D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    
    "": "home",
    "/venues": "venueResults"

  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);  
  },

  venueResults: function(){
    var view = new D2Jive.Views.D2JiveVenueResults({});
    $('#container').html(view.render().el); 
  },


});