const { createBooking, cancelBooking, getUserBookings } = require("booking-it");
// createBooking,
//   cancelBooking,
//   getUserBookings,

async function httpCreateBooking(req, res) {
  const { username, date, courtName, slot, cost } = req.body;
  const bookingStatus = await createBooking(
    username,
    date,
    courtName,
    slot,
    cost
  );
  if (bookingStatus === 1)
    return res.status(201).json({
      message: "Booking made",
    });
  else if (bookingStatus === -1)
    return res.status(400).json({
      message: "Error making the booking",
    });
}

async function httpCancelBooking(req, res) {
  const { username, date, courtName, slot } = req.body;
  const bookingStatus = await cancelBooking(username, date, courtName, slot);
  if (bookingStatus === 1)
    return res.status(200).json({
      message: "Booking cancelled",
    });
  else if (bookingStatus === -1)
    return res.status(400).json({
      message: "Error cancelling the booking",
    });
}

async function httpGetUserBookings(req, res) {
  const { username } = req.params;
  console.log(username);
  const userBookings = await getUserBookings(username);
  res.status(200).json({
    userBookings,
  });
}

module.exports = {
  httpCreateBooking,
  httpCancelBooking,
  httpGetUserBookings,
};
