const Joi = require('joi');

let driveSchema = Joi.object({
    name: Joi.string().min(2).max(15),
    phone: Joi.string().min(10).max(10),
    watsapp: Joi.string().min(10).max(15),
    address: Joi.string().min(8).max(30),
    numberSeats: Joi.number().min(1)


})

exports.validate = (driverData) => {
    return driveSchema.validate(driverData);
}