import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('comment', params.comment_id);
  },
  actions: {
    createComment(data) {
      console.log('HI');
      let comment = this.get('store').createRecord('comment', data);
      comment.save();
    },

  }

});
