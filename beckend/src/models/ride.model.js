class RideModel {
    constructor() {
        this.rides = []; 
    }

    createRide(rideData) {
        const newRide = {
            exitLocation: rideData.exitLocation,
            destinationLocation: rideData.destinationLocation,
            numberOfPassengers:rideData.numberOfPassengers,
            phoneNumber:rideData.phoneNumber
        };
        this.rides.push(newRide); 
        return newRide;
    }
}

module.exports = new RideModel();
