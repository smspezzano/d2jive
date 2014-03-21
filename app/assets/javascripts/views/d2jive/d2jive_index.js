D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'click #findMe': 'geoLocation',
    'click #submit': function(){
        this.getMap();
        this.getVenue();
    },
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  geoLocation: function(){

    var success = function(position) {
      var output = $('#location');
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;

      output.val(latitude + longitude);
    };

    var error = function() {
      var output = $('#out'); 
      output.html ("Unable to retrieve your location");
    };

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error);
    } 
  },

  getMap: function(){ 
    // var view = new D2Jive.Views.D2JiveVenueResults({});
    // $('#container').html(view.render().el);
    Backbone.history.navigate('/venues', {trigger: true});
  },

});
