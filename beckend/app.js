require('dotenv').config();
const express = require("express");
const cors = require('cors');

const rideRouter = require('./src/routes/ride.route');
const driverRouter = require('./src/routes/driver.route')

const app = express()
app.use(cors())
app.use(express.json());
app.use('/ride', rideRouter);
app.use('/driver', driverRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
