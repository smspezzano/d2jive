D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    "venues": "localeResults",
    "": "home"
  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);  
  },

  localeResults: function(){
    alert("we made it");
    var venue = {
      name: "test",
      id: 1
    };
    //var view = new D2Jive.Views.D2JiveLocaleResults({model: venue});

  }

});