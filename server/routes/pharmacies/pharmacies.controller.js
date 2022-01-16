const {
  getAllPharmacies,
  getPharmacyById,
  postPharmacy,
  putPharmacy,
} = require('../../models/pharmacies.model');

async function httpGetPharmacies(req, res) {
  const pharmacies = await getAllPharmacies();
  return res.status(200).json(pharmacies);
}

async function httpGetPharmacy(req, res) {
  pharmacyId = req.params.id;
  pharmacy = await getPharmacyById(pharmacyId);
  if (!pharmacy) {
    return res.status(404).json({
      message: 'item not found',
    });
  }
  return res.status(200).json(pharmacy);
}

async function httpPostPharmacy(req, res) {
  const pharmacy = req.body;
  if (!pharmacy.pharmacyId || !pharmacy.vaccines || !pharmacy.location) {
    return res.status(400).json({
      error: 'Missing required property',
    });
  }
  const newPharmacy = await postPharmacy(pharmacy);
  return res.status(201).json(newPharmacy);
}

async function httpPutPharmacy(req, res) {
  const reqJSON = req.body;
  pharmacyId = req.params.id;
  if (!reqJSON.vaccines) {
    return res.status(400).json({
      error: 'Missing required property',
    });
  }

  const updatedPharmacy = await putPharmacy(pharmacyId, reqJSON);
  return res.status(200).json(updatedPharmacy);
}

module.exports = {
  httpGetPharmacies,
  httpGetPharmacy,
  httpPostPharmacy,
  httpPutPharmacy,
};
