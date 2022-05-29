import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, useLocation, Route, Link } from 'react-router-dom';
import { AppBar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField,
  DialogActions, Buttons,
} from '@material-ui/core';

import Paths from '../../Paths';

import {
  Title
} from './styled';

const CreateHiveMindModal = ({ isOpen, onClose, team }) => {
  const location = useLocation();

  return (
    <div>
      <Dialog open={isOpen} onClose={isOpen}>
        <Title><i>Hive•Mind:</i> A collective intelligence</Title>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateHiveMindModal;
