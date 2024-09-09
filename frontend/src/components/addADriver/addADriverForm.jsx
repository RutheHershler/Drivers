

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [formValues, setFormValues] = React.useState({
        name: '',
        phoneNumber: '',
        watsappNumber: '',
        address: '',
        numberOfSeats: '',
    });
    const [errors, setErrors] = React.useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const validate = () => {
        let formErrors = {};

        if (!formValues.name || formValues.name.length<2) {
            formErrors.name = ' וחחיב להיות באורך 2 תווים לפחות! שם הוא שדה חובה';
        }

        if (!formValues.phoneNumber || formValues.phoneNumber.length !== 10) {
            formErrors.phoneNumber = 'מספר טלפון חייב להיות באורך של 10 ספרות';
        }

        if (!formValues.watsappNumber || formValues.watsappNumber.length !== 10) {
            formErrors.watsappNumber = 'מספר ווצאפ חייב להיות באורך של 10 ספרות';
        }

        if (!formValues.address|| formValues.name.length<5) {
            formErrors.address = 'כתובת הינה שדה חובה וחייבת לכלול 5 תווים';
        }

        if (!formValues.numberOfSeats || formValues.numberOfSeats <= 0) {
            formErrors.numberOfSeats = 'מספר מקומות חייב להיות גדול מ-0';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formValues);
        }
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                להצטרפות כנהג לחברה
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    טופס הצטרפות לחברת היימיש הסעות
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="שם"
                            id="name"
                            value={formValues.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            required
                        />
                        <TextField
                            label="מספר טלפון"
                            id="phoneNumber"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            inputProps={{ maxLength: 10 }}
                            required
                        />
                        <TextField
                            label="מספר ווצאפ"
                            id="watsappNumber"
                            value={formValues.watsappNumber}
                            onChange={handleChange}
                            error={!!errors.watsappNumber}
                            helperText={errors.watsappNumber}
                            inputProps={{ maxLength: 10 }}
                            required
                        />
                        <TextField
                            label="כתובת"
                            id="address"
                            value={formValues.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                            required
                        />
                        <TextField
                            label="מספר מקומות במונית"
                            id="numberOfSeats"
                            type="number"
                            value={formValues.numberOfSeats}
                            onChange={handleChange}
                            error={!!errors.numberOfSeats}
                            helperText={errors.numberOfSeats}
                            required
                        />
                        <Button variant="contained" disableElevation type="submit">
                            שלח למנהל
                        </Button>
                    </form>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}
