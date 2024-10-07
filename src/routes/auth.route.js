const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/api/auth/login/", loginController);
authRouter.post("/api/auth/register/", registerController);

module.exports = authRouter;
