const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authServices = require("../services/auth.service");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await authServices.getUser(email);
    if (!user) {
      return res.status(400).json({ message: "user doesnt exist in db" });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.status(400).json({ message: "pass not match with user" });
    }

    const { name, isVerified, userId } = user;

    const token = await authServices.genToken({ name, email, isVerified });

    res.status(200).json({
      userId,
      name,
      email,
      isVerified,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    const newUser = req.body;
    const userCreated = await authServices.createOne(newUser);
    res.status(201).send(userCreated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
