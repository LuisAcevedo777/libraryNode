const { Router } = require("express");
const createSession = require("../controllers/payment.controller");

const payRouter = Router();

payRouter.post("/api/session/", createSession);
payRouter.get("/success", (req, res) => res.redirect("/success.html"));
payRouter.get("/cancel", (req, res) => res.redirect("/"));

module.exports = payRouter;
