const { createCourt, getCourtBookings } = require("booking-it");

async function httpGetCourtBookings(req, res) {
  const { name, username } = req.params;
  console.log(name, username);
  const bookings = await getCourtBookings(name, username);
  if (bookings === -1)
    return res.status(400).json({
      message: "Error finding bookings with the given details",
    });
  return res.status(200).json({
    bookings,
  });
}

async function httpCreateCourt(req, res) {
  const { name, username, slots } = req.body;
  const court = await createCourt(name, username, slots);
  if (court === 1)
    return res.status(201).json({
      message: "Court created successfully.",
    });
  return res.status(400).json({
    message: "Unknown error",
  });
}

module.exports = {
  httpCreateCourt,
  httpGetCourtBookings,
};
