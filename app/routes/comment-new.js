import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model(params) {

    const user_id = this.get('auth.credentials.id');
    const hash = Ember.RSVP.hash({
      user: this.get('store').findRecord('user', +user_id),
      post: this.get('store').findRecord('post', params.post_id),
    }); console.log('yo', hash);
    return this.get('store').createRecord('comment', hash);

  },
  actions: {
    createComment(comment) {
      comment.save();
    },
  }
});
