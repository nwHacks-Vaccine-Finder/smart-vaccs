const usersDatabase = require('./users.mongo');
const pharmaciesDatabase = require('./pharmacies.mongo');

async function getUsersByPharmacyId(id) {
  return await usersDatabase.find({ pharmacyId: id }, { _id: 0, __v: 0 });
}

async function getUser(id) {
  return await usersDatabase.findOne({ userId: id }, { _id: 0, __v: 0 });
}

async function postUser(user) {
  await usersDatabase.findOneAndUpdate(
    {
      userId: user.userId,
    },
    user,
    { upsert: true }
  );
  return getUser(user.userId);
}

async function deleteUserById(id) {
  const user = await getUser(id);
  const vaccines = await pharmaciesDatabase.findOne(
    {
      pharmacyId: user.pharmacyId,
    },
    { _id: 0, __v: 0, location: 0, pharmacyId: 0, vaccines: { _id: 0 } }
  );

  await pharmaciesDatabase.updateOne(
    { pharmacyId: id, 'vaccines.vaxType': user.vaxType },
    {
      $inc: {
        'vaccines.$.quantity': -1,
      },
    }
  );

  return await usersDatabase.remove({ userId: id });
}

module.exports = {
  getUsersByPharmacyId,
  postUser,
  deleteUserById,
  getUser,
};
