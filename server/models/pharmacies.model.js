const pharmaciesDatabase = require('./pharmacies.mongo');

async function getAllPharmacies() {
  return await pharmaciesDatabase.find(
    {},
    { _id: 0, __v: 0, location: { _id: 0 }, vaccines: { _id: 0 } }
  );
}
async function getPharmacyById(id) {
  return await pharmaciesDatabase.findOne(
    { pharmacyId: id },
    { _id: 0, __v: 0, location: { _id: 0 }, vaccines: { _id: 0 } }
  );
}

async function postPharmacy(pharmacy) {
  await pharmaciesDatabase.create(pharmacy);
  return pharmacy;
}

async function putPharmacy(id, reqJSON) {
  await pharmaciesDatabase.updateOne(
    { pharmacyId: id },
    {
      vaccines: reqJSON.vaccines,
    }
  );
  return await getPharmacyById(id);
}

module.exports = {
  getAllPharmacies,
  getPharmacyById,
  postPharmacy,
  putPharmacy,
};
