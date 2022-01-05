const express = require("express");

const {
  httpCreateBooking,
  httpCancelBooking,
  httpGetUserBookings,
} = require("./booking.controller");

const bookingRouter = express.Router();

bookingRouter.post("/create", httpCreateBooking);
bookingRouter.post("/cancel", httpCancelBooking);
bookingRouter.get("/user/:username", httpGetUserBookings);

module.exports = bookingRouter;
