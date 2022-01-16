const mongoose = require('mongoose');

// const GeoSchema = mongoose.Schema({
//   type: {
//     type: String,
//     default: 'Point',
//   },
//   coordinates: {
//     type: [Number], //the type is an array of numbers
//     index: '2dsphere',
//   },
// });

const pharmaciesSchema = new mongoose.Schema({
  pharmacyId: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number], //the type is an array of numbers
      index: '2dsphere',
    },
  },
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

module.exports = mongoose.model('Pharmacy', pharmaciesSchema);
