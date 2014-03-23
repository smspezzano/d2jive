D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'submit #search': 'getVenues',
  },

  render: function(){
    // alert("this is D2Jive_Index.js");
    $(this.el).html(this.template());
    return this;
  },

  urls: {
    base: "http://api.songkick.com/api/3.0/search/venues.json?query="
  },

  getVenues: function(event){
    $('#searchResults').empty();
    event.preventDefault();

    urlAddress = $("#city").val().replace(/\s+/g, '+');
    address = $("#city").val().replace(/\s+/g, ',');

    searchURL = this.urls.base + address + "&apikey=4ash2icfOuY4R7v5";
    $.ajax({
      type: 'get',
      url: searchURL,
    }).done(function(data){
      
      var eachVenue;    
      var venueArray = data.resultsPage.results.venue;
      for (var venue in venueArray){ 
        eachVenue = [
          venueArray[venue].displayName + ", " + venueArray[venue].id,
        ];
        console.log(eachVenue);
        this.results = $('#searchResults');
        this.results.append('<li>' + '<h2>' + eachVenue + '</h2>' + '<button class="venue">' + 'View upcoming events' + '</button>' + '</li>');  
      }
      var venueView = new D2Jive.Views.D2JiveLocaleResults();
      $('#container').append(venueView.render().el);  
    });
    
    Backbone.history.navigate('/venues/'+ urlAddress, {trigger: true});
  },

  // yelpUrl: {
  //   base:
  // },

  // getImage: function(event){
  //   event.preventDefault();

  //   location = $("#city").val().replace(/\s+/g, '+');

  // },

});



