D2Jive.Views.D2JiveIndex = Backbone.View.extend({
  id: 'searchContainer',

  template: HandelbarsTemplates['d2jive/index'],

  events: {
    'submit #search': 'getVenues',
  },

  render: function(){
    $(this.el).html(this.template());
    return this;
  },

  getVenues: function(query){
    
  }
});