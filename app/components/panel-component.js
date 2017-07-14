import Ember from 'ember';

export default Ember.Component.extend({
  model: [
  {
    "id": "1",
    "firstName": "kek",
    "lastName": "lol",
    "city": "bish"
  }
],
  columns: [
  {
    "propertyName": "id",
    "title": "ID"
  },
  {
    "propertyName": "firstName",
    "title": "First Name"
  },
  {
    "propertyName": "lastName",
    "title": "Last Name"
  },
  {
    "propertyName": "city",
    "title": "City"
  }
  ]
});
