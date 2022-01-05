const express = require("express");
const userRouter = require("./src/routes/user/user.router");
const bookingRouter = require("./src/routes/booking/booking.router");
const courtRouter = require("./src/routes/court/court.router");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/booking", bookingRouter);
app.use("/court", courtRouter);

module.exports = app;
