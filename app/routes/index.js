import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  flashMessages: Ember.inject.service(),
  model() {
    if (this.get('isAuthenticated')) {
      let name = this.get('auth').get('credentials').get('id');
      return this.get('store').findRecord('user', name);
    }

  },
});
