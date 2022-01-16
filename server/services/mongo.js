const mongoose = require('mongoose');
const MONGO_URL =
  'mongodb+srv://vax-api:PeibkjavcyR1QJ1a@smartvaccine-cluster.hi6ok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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
