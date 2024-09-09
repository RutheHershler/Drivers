const express = require("express");
const router = express.Router();
const { addDriver } = require('../controllers/driver.controller');

router.post('/', addDriver);

module.exports = router