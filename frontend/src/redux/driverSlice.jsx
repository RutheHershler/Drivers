import { createSlice } from "@reduxjs/toolkit";
import UsePost from './hooks/postHook';

const initialDriverState = {
    driveres: [],
};

const driverSlice = createSlice({
    name: "driver",
    initialState: initialDriverState,
    reducers: {
        addDriver: (state, action) => {
            const driverData = action.payload;
            const driverInstance = new Driver();
            ///class data

            const post = UsePost();
            post('http://localhost:3000/driveres', driverInstance);

            state.driveres.push(driverInstance);
        },
    },
});

export const { addDriver } = driverSlice.actions;
export const selectDriveres = (state) => state.driver.driveres;
export default driverSlice.reducer;