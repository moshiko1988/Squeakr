import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editPost (post) {
      console.log(post);
      post.save();
      this.transitionTo('post', post);
    },
    cancel () {
      history.back();
    },
  },
});
