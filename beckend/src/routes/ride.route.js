const express = require("express");
const router = express.Router();
const {addRide} =require('../controllers/ride.controller');

router.post('/', addRide);

module.exports = router