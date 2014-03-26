D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'click #submit': 'getCollectionOfVenues',
  },

  initialize: function (){

  },

  render: function(){
    console.log("we are on the index page");
    $(this.el).html(this.template());
    return this;
  },

  getCollectionOfVenues: function() {
    
    var location = $("#city").val().replace(/\s+/g, '+');

    // this.collection = new D2Jive.Collections.Venues( [], { location: address });
     //var newResults = new D2Jive.Views.D2JiveLocaleResults({collection: this.collection});
     Backbone.history.navigate('venues?address='+location+'', {trigger: true});
  },
});
