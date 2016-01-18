Errors = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  throw: function(message, alertType) {
    Errors.collection.insert({message: message, alert: alertType, seen: false})
  }
};
