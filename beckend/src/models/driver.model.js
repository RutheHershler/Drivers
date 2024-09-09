class DriverModel {
    constructor() {
        this.drivers = [];
    }

    createDrive(driverData) {
        const newDriver = {
            name: driverData.name,
            phoneNumber: driverData.phoneNumber,
            watsappNumber: driverData.watsappNumber,
            address: driverData.address,
            numberOfSeats: driverData.numberOfSeats
        };
        this.drivers.push(newDriver);
        return newDriver;
    }
}

module.exports = new DriverModel();