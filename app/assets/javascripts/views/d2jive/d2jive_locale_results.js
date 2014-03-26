D2Jive.Views.D2JiveLocaleResults = Backbone.View.extend({
  
  className: 'small-12 large-12 columns results_container',
  id: 'overlay',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'click a': 'getShows',
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); 
  },

  render: function(){
    var venueObject = this.collection.toJSON();
    this.$el.html(this.template({venues: venueObject}));
    return this; 
  },

  // urls: {
  //   base: "http://api.songkick.com/api/3.0/venues/"
  // },


  getShows: function(event){
    event.preventDefault();
    var query = window.location.search;
    var location = query.split("=")[1].replace(/\+/g, '%20');
    var venueId = $(event.currentTarget).data("id");
    Backbone.history.navigate('venue?address='+ location + '?venue=' + venueId, {trigger: true});
  }
  // event.preventDefault();

  // var venueId = $(".venueId").val();
  // $('#container').empty();

  // searchURL = this.urls.base + venueId + "/calendar.json?apikey=4ash2icfOuY4R7v5";
  // $.ajax({
  //   type: 'get',
  //   url: searchURL,
  // }).done(function(data){
  //   var eachVenue;
  //   var eventView;
  //   var artistArray=[];
  //   var eventArray = data.resultsPage.results.event;
  //   for (var ev in eventArray){
  //     for (var artist in eventArray[ev].performance){
  //       var artistObject = {};
  //       artistObject['name'] = eventArray[ev].performance[artist].displayName;
  //       artistObject['billing'] = eventArray[ev].performance[artist].billing;
  //       artistArray.push(artistObject);
  //     }

  //     eachEvent = {
  //       name: eventArray[ev].displayName, 
  //       uri: eventArray[ev].uri,
  //       artists: artistArray,
  //     };
  //     eventView = new D2Jive.Views.D2JiveVenueResults({ model: eachEvent});
  //     $('#container').append(eventView.render().el);
  //     artistArray.length = 0;
  //   }
  // });
  // Backbone.history.navigate('venue', {trigger: true});
  // }

});





