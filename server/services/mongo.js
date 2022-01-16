const mongoose = require('mongoose');
require('dotenv');
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.on('error', (err) => {
  console.log(err);
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});
async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
