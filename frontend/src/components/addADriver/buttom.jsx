import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FullWidthTextField from './addADriverForm';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={        
        FullWidthTextField
        }>להצטרפות כנהג לחברה</Button>
    </Stack>
  );
}