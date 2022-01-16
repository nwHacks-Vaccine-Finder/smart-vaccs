async function httpGetPharmcies(req, res) {
  const pharmacies = await getAllPharmcies();
  return res.status(200).json(pharmacies);
}

async function httpPostPharmacy(req, res) {
  pharmacy = req.body;
  if (!pharmacy.Id || !pharmacy.vaccines || user.location) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }
  const newPharmacy = await createPharmacy(user);
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

  const updatedPharmacy = await updatePharmacy();
  return res.status(200).json(updatedPharmacy);
}
