require('dotenv').config();
const express = require("express");
const cors = require('cors');

const messageRouter = require('./src/routes/sendMessage.route');

const app = express()
app.use(cors())
app.use('/message', messageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
  });