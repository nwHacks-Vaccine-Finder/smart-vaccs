const express = require('express');
const {
  httpGetPharmacies,
  httpGetPharmacy,
  httpPostPharmacy,
  httpPutPharmacy,
} = require('./pharmacies.controller');

const pharmaciesRouter = express.Router();

pharmaciesRouter.get('/', httpGetPharmacies);
pharmaciesRouter.get('/:id', httpGetPharmacy);
pharmaciesRouter.post('/', httpPostPharmacy);
pharmaciesRouter.put('/:id', httpPutPharmacy);

module.exports = pharmaciesRouter;
