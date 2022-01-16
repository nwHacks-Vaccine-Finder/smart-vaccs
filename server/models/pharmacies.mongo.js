const mongoose = require('mongoose');

const pharmaciesSchema = new mongoose.Schema({
  pharmacyId: {
    type: String,
    required: true,
  },
  location: GeoSchema,
  vaccines: {
    type: [
      {
        vaxType: String,
        quantity: Number,
      },
    ],
    required: true,
  },
});

const GeoSchema = mongoose.Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number], //the type is an array of numbers
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Pharmacy', pharmaciesSchema);
