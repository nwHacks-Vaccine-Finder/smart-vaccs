const usersDatabase = require('./users.mongo');
const pharmaciesDatabase = require('./pharmacies.mongo');

async function getUsersByPharmacy(id) {
  return await usersDatabase.find({ pharmacyId: id }, { _id: 0, __v: 0 });
}

async function getUser(id) {
  return await usersDatabase.findOne({ userId: id }, { _id: 0, __v: 0 });
}

async function postUser(user) {
  return await usersDatabase.findOneAndUpdate(
    {
      userId: user.userId,
    },
    user,
    { upsert: true }
  );
}

async function deleteUserByIdInPharmacy(userId, pharmacyId) {
  const user = await usersDatabase.find({ pharmacyId: id }, { _id: 0, __v: 0 });
  await pharmaciesDatabase.update(
    { pharmacyId: pharmacyId, vaccines: { vaxType: user.vaxType } },
    { vaccines: { quantity: { $inc: { seq: -1 } } } }
  );
  return await usersDatabase.remove({ userId: id });
}

module.exports = {
  getUsersByPharmacy,
  postUser,
  deleteUserByIdInPharmacy,
};
