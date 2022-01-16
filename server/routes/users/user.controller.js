const {
  getUsersByPharmacyId,
  getUser,
  postUser,
  deleteUserById,
} = require('../../models/users.model');

async function httpGetUsersByPharmacy(req, res) {
  const pharmacyId = req.params.id;
  const users = await getUsersByPharmacyId(pharmacyId);
  return res.status(200).json(users);
}

async function httpPostUser(req, res) {
  const user = req.body;
  const existingUser = await getUser(user.userId);
  if (
    !user.age ||
    !user.userId ||
    !user.name ||
    !user.pharmacyId ||
    !user.vaxType
  ) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  } else if (existingUser) {
    return res.status(409).json({
      error: 'User already exists',
    });
  }

  const newUser = await postUser(user);
  return res.status(201).json(newUser);
}

async function httpDeleteUser(req, res) {
  const userId = req.params.id;
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return res.status(404).json({
      error: 'User not found',
    });
  }
  const deleted = await deleteUserById(userId);

  if (!deleted) {
    return res.status(400).json({
      error: 'User not Deleted',
    });
  }
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpGetUsersByPharmacy,
  httpPostUser,
  httpDeleteUser,
};
