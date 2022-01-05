const express = require("express");

const { httpCreateCourt, httpGetCourtBookings } = require("./court.controller");

const courtRouter = express.Router();

courtRouter.post("/new", httpCreateCourt);
courtRouter.get("/bookings/:name/:username", httpGetCourtBookings);

module.exports = courtRouter;
