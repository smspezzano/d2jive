D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  // tagname: 'div',
  // className: 'subject',
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'submit #search': 'getVenues',
    // 'click': 'onClick'

  },

  render: function(){
    console.log("we are on the index page");
    $(this.el).html(this.template());
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/search/venues.json?query="
  },

  getVenues: function(event){
    $('#searchResults').empty();
    event.preventDefault();

    var location = $("#city").val().replace(/\s+/g, '+');
    var address = $("#city").val().replace(/\s+/g, ',');
    var yelpLocation = $("#city").val().replace(/\s+/g, '-');

    searchURL = this.urls.base + address + "&apikey=4ash2icfOuY4R7v5";
    $.ajax({
      type: 'get',
      url: searchURL
    })
    .done(function(data){
      var eachVenue;    
      var venueArray = data.resultsPage.results.venue;
      for (var venue in venueArray){ 
        eachVenue = {
          name: venueArray[venue].displayName, 
          id: venueArray[venue].id,
        };
        venueView = new D2Jive.Views.D2JiveLocaleResults({ model: eachVenue });
        $('#container').append(venueView.render().el);      
      }
    });   
  Backbone.history.navigate('venues', {trigger: true});
  },  
});


    
        // eachVenue = { name: venueArray[venue].displayName, id: venueArray[venue].id };
        // console.log(eachVenue);
        //$('#searchResults').append('<li>' + '<h2>' + eachVenue.name + '</h2>' + '<button class="shows" id="' + eachVenue.id + '">' + eachVenue.id + '</button>' + '</li>');   
        // }




