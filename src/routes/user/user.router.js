const express = require("express");

const { httpCreateUser, httpSignInUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/signup", httpCreateUser);
userRouter.post("/signin", httpSignInUser);

module.exports = userRouter;
