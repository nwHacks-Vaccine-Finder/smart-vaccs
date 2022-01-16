const {
  getAllPharmacies,
  postPharmacy,
  putPharmacy,
} = require('../../models/pharmacies.model');

async function httpGetPharmcies(req, res) {
  const pharmacies = await getAllPharmacies();
  return res.status(200).json(pharmacies);
}

async function httpPostPharmacy(req, res) {
  pharmacy = req.body;
  if (!pharmacy.Id || !pharmacy.vaccines || user.location) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }
  const newPharmacy = await postPharmacy(user);
  return res.status(201).json(newPharmacy);
}

async function httpPutPharmacy(req, res) {
  vaccines = req.body;
  pharmacyId = req.params.id;
  if (!vaccines) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }

  const updatedPharmacy = await putPharmacy(pharmacyId, vaccines);
  return res.status(200).json(updatedPharmacy);
}

module.exports = {
  httpGetPharmcies,
  httpPostPharmacy,
  httpPutPharmacy,
};
