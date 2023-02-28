import userService from "../services/UserService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!s",
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  // check email exist
  // compare password
  // return userInFor
  // access_token: JWT

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    userData: userData.user,
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id;
  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OK',
    users: users

  })
};

module.exports = {
  handleLogin,
  handleGetAllUsers,
};
