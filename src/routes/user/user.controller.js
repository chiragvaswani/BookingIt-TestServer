const { signUpUser, signInUser } = require("booking-it");

async function httpCreateUser(req, res) {
  const { username, password, isOwner } = req.body;
  const user = await signUpUser(username, password, isOwner);
  if (user === -1) {
    res.status(400).json({
      error: "Error signing up the user",
    });
    return;
  } else
    res.status(201).json({
      user,
      message: "User created",
    });
}

async function httpSignInUser(req, res) {
  const { username, password } = req.body;
  const user = await signInUser(username, password);
  if (user === -1) {
    res.status(400).json({
      error: "Error signing up the user",
    });
    return;
  } else {
    res.status(201).json({
      user,
      message: "User signed in",
    });
    return user;
  }
}

module.exports = {
  httpSignInUser,
  httpCreateUser,
};
