const {
  getUserByPharmacy,
  postUser,
  deleteUserById,
} = require('../../models/users.model');

async function httpGetUsersByPharmacy(req, res) {
  const pharmacyId = req.params.id;
  const users = await getUserByPharmacy(pharmacyId);
  return res.status(200).json(users);
}

async function httpPostUser(req, res) {
  user = req.body;
  if (
    !user.age ||
    !user.userId ||
    !user.Name ||
    !user.pharmacyId ||
    !user.vaxType
  ) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }
  const newUser = await postUser(user);
  return res.status(201).json(newUser);
}

async function httpDeleteUser(req, res) {
  const userId = req.params.id;
  const pharmacyId = req.headers.pharmacyId;
  const deleted = await deleteUserByIdInPharmacy(userId, pharmacyId);

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
