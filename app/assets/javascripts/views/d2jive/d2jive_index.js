D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'submit .searchbar': 'getVenues',
  },

  initialize: function (){
    this.collection = new venuesCollection();
    // this.collection.bind('all', this.render);
    this.model = new venueModel();
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
    // $('#searchResults').empty();
    event.preventDefault();


    var location = $("#city").val().replace(/\s+/g, '+');
    var address = $("#city").val().replace(/\s+/g, ',');
    // var yelpLocation = $("#city").val().replace(/\s+/g, '-');
    searchURL = this.urls.base + address + "&apikey=4ash2icfOuY4R7v5";

    var listOfVenues = [];
    var songkickData = function(data){
      // console.log(data);
      var filtered_data = data.resultsPage.results.venue;
      for (var venue in filtered_data){
       var newVenue = new venueModel({
          location: address,
          id: filtered_data[venue].id,
          name: filtered_data[venue].displayName, 
        }); 
       listOfVenues.push(newVenue);
      }
      var collectionOfVenues = new venuesCollection(listOfVenues);
      console.log(collectionOfVenues);
    };
      $.ajax({
        type: 'get',
        url: searchURL,
        success: function(data){
          songkickData(data);
        }
      });

    // venueView = new D2Jive.Views.D2JiveLocaleResults({ model: eachVenue });
    // $('#searchResults').append(venueView.render().el);      
    //   }
    // });   
  //Backbone.history.navigate('venues' + location, {trigger: true});
  }, 
});



// eachVenue = { name: venueArray[venue].displayName, id: venueArray[venue].id };
// console.log(eachVenue);
//$('#searchResults').append('<li>' + '<h2>' + eachVenue.name + '</h2>' + '<button class="shows" id="' + eachVenue.id + '">' + eachVenue.id + '</button>' + '</li>');   
// }




