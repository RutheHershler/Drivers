import * as React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { addRide } from '../../redux/rideSlice';

export default function AddARideForm() {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = React.useState({
        exitLocation: '',
        destinationLocation: '',
        numberOfPassengers: 1,
        phoneNumber: '',
    });
    const [errors, setErrors] = React.useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevRideData) => ({
            ...prevRideData,
            [name]: value,
        }));
    };

    const handleAddRide = () => {
        // e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formValues);
            dispatch(addRide(formValues));

        }
    };
    const validate = () => {
        let formErrors = {};

        if (!formValues.phoneNumber || formValues.phoneNumber.length !== 10) {
            formErrors.phoneNumber = 'מספר טלפון חייב להיות באורך של 10 ספרות';
        }

        if (!formValues.exitLocation || formValues.exitLocation.length < 5) {
            formErrors.exitLocation = 'מיקום יציאה חייב לכלול 5 תווים לפחות';
        }

        if (!formValues.destinationLocation || formValues.destinationLocation.length < 5) {
            formErrors.destinationLocation = '  מיקום יעד הינו שדה חובה וחייבת לכלול 5 תווים';
        }

        if (!formValues.numberOfPassengers || formValues.numberOfPassengers <= 0) {
            formErrors.numberOfPassengers = 'מספר מקומות חייב להיות גדול מ-0';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
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
                    value={formValues.exitLocation}
                    onChange={handleInputChange}
                    error={!!errors.exitLocation}
                    helperText={errors.exitLocation}
                    required
                />
                <TextField
                    fullWidth
                    type="text"
                    label="מיקום יעד"
                    id="destination-location"
                    name="destinationLocation"
                    value={formValues.destinationLocation}
                    onChange={handleInputChange}
                    error={!!errors.destinationLocation}
                    helperText={errors.destinationLocation}
                    required
                />
                <TextField
                    fullWidth
                    type="number"
                    label="מספר נוסעים"
                    id="number-of-passengers"
                    name="numberOfPassengers"
                    value={formValues.numberOfPassengers}
                    onChange={handleInputChange}
                    error={!!errors.numberOfPassengers}
                    helperText={errors.numberOfPassengers}
                    required
                />
                <TextField
                    fullWidth
                    type="text"
                    label="מספר פלאפון"
                    id="phone-number"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                    required
                />
            </Box>
            <Button variant="contained" disableElevation onClick={handleAddRide}>
                פרסם הודעה
            </Button>
        </>
    );
}