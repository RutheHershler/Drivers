import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const initialRideState = {
    rides: [],
};

const rideSlice = createSlice({
    name: "ride",
    initialState: initialRideState,
    reducers: {
        addRide: (state, action) => {
            const rideData = action.payload;
            const rideInstance = {
                exitLocation: rideData.exitLocation,
                destinationLocation: rideData.destinationLocation,
                numberOfPassengers: rideData.numberOfPassengers,
                phoneNumber: rideData.phoneNumber,
            };
            // Make the API call to post the data to the server
            const post = UsePost();
            post('http://localhost:8000/ride', rideInstance);

            // Save the ride data locally in the state
            state.rides.push(rideInstance);
        },
    },
});

export const { addRide } = rideSlice.actions;
export const selectRides = (state) => state.rides;
export default rideSlice.reducer;