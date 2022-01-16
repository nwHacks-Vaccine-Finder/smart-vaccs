const pharmaciesDatabase = require('./pharmacies.mongo');

async function getAllPharmacies() {
  return await pharmaciesDatabase.find({}, { _id: 0, __v: 0 });
}

async function postPharmacy(pharmacy) {
  return await pharmaciesDatabase.findOneAndUpdate(
    {
      pharmacyId: pharamacy.pharmacyId,
    },
    pharmacy,
    { upsert: true }
  );
}

async function putPharmacy(id, vaccines) {
  return await pharmacyDatabase.update(
    { pharmacyId: id },
    {
      vaccines: vaccines,
    }
  );
}

module.exports = {
  getAllPharmacies,
  postPharmacy,
  putPharmacy,
};
