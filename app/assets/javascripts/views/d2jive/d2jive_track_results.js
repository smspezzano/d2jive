D2Jive.Views.D2JiveTrackResults = Backbone.View.extend({
  id: 'trackResults',

  template: HandlebarsTemplates['d2jive/tracks'],

  events: {},

  render: function(){
    $(this.el).html(this.template(this.model));
    return this;
  },

});