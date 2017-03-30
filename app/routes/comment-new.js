import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  },
  actions: {
    createComment(data) {
      const comment = this.get('store').createRecord('comment', data);
      comment.save()
      .then(()=>history.back());
    },
    cancel () {
      history.back();
    },
  }
});
