const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  pharmacyId: {
    type: String,
    required: true,
  },
  vaxType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Pharmacy', usersSchema);
