const express = require('express');

const {
  httpGetUsersByPharmacy,
  httpPostUser,
  httpDeleteUser,
} = require('./user.controller');

const usersRouter = express.Router();

usersRouter.get('/:id', httpGetUsersByPharmacy);
usersRouter.post('/', httpPostUser);
usersRouter.delete('/:id', httpDeleteUser);

module.exports = usersRouter;
