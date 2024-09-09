const rideModel=require('../models/ride.model');

exports.addRide = async (req, res) => {
  try {
      const newRide = rideModel.createRide(req.body);

      res.status(201).json({
          message: "Ride created successfully",
          data: newRide
      });
  } catch (error) {
      res.status(500).json({
          message: "An error occurred",
          error: error.message
      });
  }
};