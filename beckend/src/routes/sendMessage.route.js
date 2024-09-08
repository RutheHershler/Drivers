const express = require("express");
const router = express.Router();
const {addMessage} =require('../controllers/sendMessage.controller');

router.post('/', addMessage);

module.exports = router