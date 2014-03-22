$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'click #findMe': 'geoLocation',
    'submit #search': 'getLocation',
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

  getLocation: function(e){ 
    // make a call to google maps API with city and state from input field .val();
    // use that value to make the get request and pass over to the venue results view
    //   var value = $( '#location' ).val();
    //   $( "p" ).html( value );
    // // }).keyup();
    var locationDetails = $(e.currentTarget).serializeObject();
    console.log(locationDetails);
    return false;
      
    // var view = new D2Jive.Views.D2JiveVenueResults({});
    // $('#container').html(view.render().el);
    // Backbone.history.navigate('/venues', {trigger: true});
  },

});

