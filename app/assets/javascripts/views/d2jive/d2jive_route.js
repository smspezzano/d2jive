D2Jive.Routers.Main = Backbone.Router.extend({

  routes: {
    // "/venues": "getVenues",
    "": "home"
  },

  home: function() {
    var view = new D2Jive.Views.D2JiveIndex({});
    $('#container').html(view.render().el);  
  },

  
  // getVenues: function(){
  //   // event.preventDefault();
  //   address = $("#city").val().replace(/\s+/g, ',');

  //   searchURL = this.urls.base + address + "&apikey=4ash2icfOuY4R7v5";
  //   $.ajax({
  //     type: 'get',
  //     url: searchURL,
  //   }).done(function(data){
      
  //     var resultsView;
  //     var venueArray = data.resultsPage.results.venue;
  //     for (var venue in venueArray){ 
  //       var eachVenue = {name: venueArray[venue].displayName, id: venueArray[venue].id};
  //       resultsView = new D2Jive.Views.D2JiveLocaleResults({ model: eachVenue });
  //       $('#container').append(resultsView.render().el);      
  //     }
  //   });
  // }

});