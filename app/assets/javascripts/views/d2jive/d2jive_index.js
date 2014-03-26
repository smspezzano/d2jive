D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'click #submit': 'getCollectionOfVenues',
  },

  initialize: function (){

  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getCollectionOfVenues: function() {

    var location = $("#city").val().replace(/\s+/g, '+');
    Backbone.history.navigate('venues?address='+location+'', {trigger: true});
  },
});
