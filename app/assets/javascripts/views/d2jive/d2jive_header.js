D2Jive.Views.D2JiveHeader = Backbone.View.extend({
  
  className: 'headerSearch',

  template: HandlebarsTemplates['d2jive/header_search'],

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