var mongoose = require('mongoose');

var UserSchema = mongoose. Schema({
  employee_id: {
    type: String
  },
  first_Name: {
    type: String
  },
  last_Name: {
    type: String
  },
  email_id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
});
module.exports = mongoose.model('User',UserSchema);
