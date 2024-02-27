const RegisteredUser = require("./registeredUserModel");

async function isUserRegistered (phoneNumber) {

  let registeredUser = await RegisteredUser.findOne({
    phoneNumber: phoneNumber,
  });

  if (registeredUser) {
    console.log("User is registered.")
    return registeredUser;
  } else {
    console.log("User not registered.");
    return false;
  }
};

module.exports = isUserRegistered;
