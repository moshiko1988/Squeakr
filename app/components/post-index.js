import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('post'));
    },
    cancel() {
      this.get('post').rollbackAttributes();
      this.sendAction('cancel');
    },
    delete() {
      console.log('what?');
      this.sendAction('delete', this.get('post'));
    },
  }
});
