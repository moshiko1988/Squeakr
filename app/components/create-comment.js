import Ember from 'ember';

export default Ember.Component.extend({
  // newComment:{
  //   body: null,
  // },

  actions: {
    createComment() {
      // let data = this.get('newComment');
      // data.comment = this.get('comment');
      this.sendAction('createComment', this.get('comment'));
      // this.set('comment', null);
    },
  }
});
