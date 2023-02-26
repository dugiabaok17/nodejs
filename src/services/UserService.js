import bcrypt from "bcryptjs";
import db from "../models/index";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // user already exist
        //Compare password
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ['email','password','roleId'],
          raw: true
        });

        if (user) {
          let check = bcrypt.compareSync(password, user.password); // false
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "Ok";
            console.log(user)
            delete user.password
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User's not found";
        }
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage =
          "Your's Email is not exist in your system. Please try other email";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let compareUserPassword = (password) => {
  return new Promise((resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleUserLogin,
};
