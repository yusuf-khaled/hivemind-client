import React, { useState } from 'react';
import {
  Button, Dialog, DialogContent, TextField,
  DialogActions,
} from '@material-ui/core';

import {
  Title,
} from './styled';


const TransmitBrainWaveModal = ({ isOpen, onClose, description, onTransmitBrainWave }) => {
  const [transmission, setTransmission] = useState();

  const onTransmit = () => {
    onTransmitBrainWave(transmission);
  };

  const onChangeTransmission = (event) => {
    setTransmission(event.target.value);
  }

  return (
    <div>
      <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose}>
        <Title><i>Trans•mit:</i> Allow <b>energy</b> to pass through a medium</Title>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="transmission"
            label="Transmission*"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            onChange={onChangeTransmission}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onTransmit}>Transmit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TransmitBrainWaveModal;
