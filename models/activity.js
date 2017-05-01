const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/doggydoor';

var pgp = require('pg-promise')();
var db = pgp(connectionString);


module.exports = {
  
  getAll: function() {
    return db.any('SELECT * FROM salesforce.doggy_door_activity__c LIMIT 100');
  }
  
};