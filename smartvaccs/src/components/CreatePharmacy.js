import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const CreatePharmacy = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const onClose = () => {
    setOpen(false);
    navigate.push('/pharmacy');
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add your Information</DialogTitle>
        <DialogContent>
          <DialogContentText>To</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePharmacy;
