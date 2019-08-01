"use strict"
const signupRouter = require("express").Router();
const signupHandler = require("../handlers/signupHandler");

signupRouter.get("/", signupHandler.getSignupPage);
signupRouter.post("/", signupHandler.createNewUser);

module.exports = signupRouter;