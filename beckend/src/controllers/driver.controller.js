const driverModel = require('../models/driver.model');

exports.addDriver = async (req, res) => {
    try {
        const newDriver = driverModel.createDrive(req.body);

        res.status(201).json({
            message: "Driver created successfully",
            data: newDriver
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
};