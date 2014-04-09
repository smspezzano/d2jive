D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  
  id: 'searchContainer',

  template: HandlebarsTemplates['d2jive/index'],

  events: {
    'click #submit' : 'getCollectionOfVenues',
    'keyup #city' : 'processKey'
  },

  initialize: function (){

  },

  processKey: function(event) { 
    // if (event.keyCode != 13){
    //  //return;
    // } else {
    //   this.getCollectionOfVenues(event);
    // }
    event.preventDefault();
    console.log('hit processKey');
    console.log(event.keyCode);
    if(event.keyCode == 13){
      var location = $("#city").val().replace(/\s+/g, '+');
      Backbone.history.navigate('venues?address='+location+'', {trigger: true});
    }
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getCollectionOfVenues: function(event) {
    //event.preventDefault();
    var location = $("#city").val().replace(/\s+/g, '+');
    Backbone.history.navigate('venues?address='+location+'', {trigger: true});
  },
});
