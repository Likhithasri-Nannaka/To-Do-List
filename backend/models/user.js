// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sessions: [{
    loginTime: Date,
    logoutTime: Date,
    ipAddress: String
  }]
});

module.exports = mongoose.model('User', userSchema, 'Test_Runs_TestCases');
