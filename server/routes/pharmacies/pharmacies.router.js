const express = require('express');
const {
  httpGetPharmcies,
  httpPostPharmacy,
  httpPutPharmacy,
} = require('./pharmacies.controller');

const pharmaciesRouter = express.Router();

pharmaciesRouter.get('/:id', httpGetPharmcies);
pharmaciesRouter.post('/', httpPostPharmacy);
pharmaciesRouter.delete('/:id', httpPutPharmacy);

module.exports = pharmaciesRouter;
