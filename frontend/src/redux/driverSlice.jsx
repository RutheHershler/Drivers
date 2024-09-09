import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';
import Driver from '../classes/driver'

const initialDriverState = {    
    driveres: [],
};

const driverSlice = createSlice({    
    name: "driver",
    initialState: initialDriverState,
    reducers: {
        addDriver: (state, action) => {
            
            const driverData = action.payload;
            const driverInstance = {
                name: driverData.name,
                phoneNumber: driverData.phoneNumber,
                watsappNumber: driverData.watsappNumber,
                address: driverData.address,
                numberOfSeats: driverData.numberOfSeats,
            };
            ///class data
            
            // const post = UsePost();
            // post('http://localhost:3000/driveres', driverInstance);

            state.driveres.push(driverInstance);
            console.log(driverInstance);
            
        },
    },
});

export const { addDriver } = driverSlice.actions;
export const selectDriveres = (state) => state.driveres;
export default driverSlice.reducer;