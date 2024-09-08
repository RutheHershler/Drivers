import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FullWidthTextField() {
    return (
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField  label="שם" id="name" />
            <TextField  label="מספר טלפון" id="phon-number" />
            <TextField  label="מספר ווצאפ" id="watsap-number" />
            <TextField  label="כתובת" id="address" />
            <TextField  label="מספר מקומות במונית" id="numbers-of-seats" />
            <Button variant="contained" disableElevation>
                שלח למנהל
            </Button>
        </Box>
    );
}


