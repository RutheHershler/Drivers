import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


export default function AddARideForm() {
    return (
        <>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth type="text" label="מיקום יציאה" id="exit-location" />
                <TextField fullWidth type="text" label="מיקום יעד" id="destination-location" />
                <TextField fullWidth type="number" label="מספר נוסעים" id="number-of-passengers" />
                <TextField fullWidth type="text" label="מספר פלאפון" id="phone-number" />
            </Box>
            <Button variant="contained" disableElevation>
                פרסם הודעה
            </Button>
        </>
    );
}
