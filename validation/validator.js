const isEmpty = require("./isEmpty");
const validator = require("validator");
function validateRegister(data) {
  let errors = {};
  data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.confirm = isEmpty(data.confirm) ? "" : data.confirm;

  if (validator.isEmpty(data.name)) {
    errors.name = "required name";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "required format email";
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = "required confirm";
  } else if (
    !validator.equals(data.confirm, data.password) &&
    !validator.isEmpty(data.password)
  ) {
    errors.confirm = "confirm and password must be match";
  }
  return {
    errors,
    isvalid: isEmpty(errors),
  };
}
function validateLogin(data) {
  let errors = {};
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "required format email";
  }
  return {
    errors,
    isvalid: isEmpty(errors),
  };
}
function validateProfile(data) {
  let errors = {};
  data.email = isEmpty(data.email) ? "" : data.email;
  data.name = isEmpty(data.name) ? "" : data.name;
  data.tel_number = isEmpty(data.tel_number) ? "" : data.tel_number;
  data.last_name = isEmpty(data.last_name) ? "" : data.last_name;

  if (validator.isEmpty(data.name)) {
    errors.name = "required name";
  }
  if (validator.isEmpty(data.last_name)) {
    errors.last_name = "required last name";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "required format email";
  }
  if (
    validator.isEmpty(data.tel_number) ||
    data.tel_number.length < 8 ||
    isNaN(data.tel_number)
  ) {
    errors.tel_number = "required correct phone number";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
module.exports = { validateRegister, validateLogin, validateProfile };
