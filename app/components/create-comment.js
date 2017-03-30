import Ember from 'ember';

export default Ember.Component.extend({
  newComment:{
    body: null,
  },

  actions: {
    createComment() {
      let data = this.get('newComment');
      data.post = this.get('post');
      this.sendAction('createComment', data);
      this.set('newComment.body', null);
    },
    cancel() {
    history.back();
    this.set('newComment.body', null);
    },
  }
});
