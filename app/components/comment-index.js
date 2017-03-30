import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      console.log('comment', this.get('comment'));
      this.sendAction('delete', this.get('comment'));
    }
  }
});
