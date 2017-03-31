import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('comment', params.comment_id);
  },
  actions: {
    createComment(data) {
      let comment = this.get('store').createRecord('comment', data);
      comment.save();
    },

    delete(comment) {
      comment.destroyRecord();
    }
  }

});
