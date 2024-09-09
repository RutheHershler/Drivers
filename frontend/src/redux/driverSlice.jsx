import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const initialDriverState = {
    drivers: [],
};

const driverSlice = createSlice({    
    name: "driver",
    initialState: initialDriverState,
    reducers: {
        addDriver: (state, action) => {
            
            const driverData = action.payload;
            const driverInstance = {
                name:driverData.name,
                phoneNumber:driverData.phoneNumber,
                watsappNumber:driverData.watsappNumber,
                address:driverData.address,
                numberOfSeats:driverData.numberOfSeats,
            }

            const post = UsePost();
            post('http://localhost:8000/driver', driverInstance);

            state.drivers.push(driverInstance);
        },
    },
});

export const { addDriver } = driverSlice.actions;
export const selectDrivers = (state) => state.driver.drivers;
export default driverSlice.reducer;