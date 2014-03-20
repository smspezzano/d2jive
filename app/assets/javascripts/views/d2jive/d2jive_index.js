D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'submit #search': 'getVenues',
  },

  urls: {
    base: "http://api.jambase.com/venues?zipCode="
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getVenues: function(query){
    searchURL = base + query + "&page=0&api_key=eh8ayaj77te8zgaru9g4bzgx";
    $.ajax({
      type: 'get',
      url: searchURL,
    }).done(function(data){
      var view = new D2Jive.Views.D2JiveLocaleResults({});
    });

  }
});

