D2Jive.Views.D2JiveVenueResults = Backbone.View.extend({
  id: 'localeResults',

  template: HandlebarsTemplates['d2jive/locale_results'],

  events: {
    'load #mapCanvas': 'initializeMap',
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  initializeMap: function(){
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    };

    var map = new google.maps.Map($('#map-canvas'),
      mapOptions, done);

    var body = $('#container');
    var script = $('#script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDTjCc4nW5h8FdgY0RA5cWXAIrGTuv8PSM&sensor=false';
    body.append$('#script');
  }

});