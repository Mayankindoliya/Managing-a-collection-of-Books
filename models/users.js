const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {type: String, required: true},
    emailId: {type: String, required: true},
    address: String,
    phnNo: String,
    dob: String,
    username: {type: String, required: true},
    password: {type: String, required: true}
  },
  {
    timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('users', usersSchema);