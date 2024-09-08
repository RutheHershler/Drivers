import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { addRide } from '../../redux/rideSlice';

export default function AddARideForm() {
    const dispatch = useDispatch();
    const [rideData, setRideData] = useState({
        exitLocation: '',
        destinationLocation: '',
        numberOfPassengers: 1,
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRideData((prevRideData) => ({
            ...prevRideData,
            [name]: value,
        }));
    };

    const handleAddRide = () => {
        dispatch(addRide(rideData));
    };

    return (
        <>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField
                    fullWidth
                    type="text"
                    label="מיקום יציאה"
                    id="exit-location"
                    name="exitLocation"
                    value={rideData.exitLocation}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="מיקום יעד"
                    id="destination-location"
                    name="destinationLocation"
                    value={rideData.destinationLocation}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    type="number"
                    label="מספר נוסעים"
                    id="number-of-passengers"
                    name="numberOfPassengers"
                    value={rideData.numberOfPassengers}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    type="text"
                    label="מספר פלאפון"
                    id="phone-number"
                    name="phoneNumber"
                    value={rideData.phoneNumber}
                    onChange={handleInputChange}
                />
            </Box>
            <Button variant="contained" disableElevation onClick={handleAddRide}>
                פרסם הודעה
            </Button>
        </>
    );
}