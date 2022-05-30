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
  Title,
  TeamText
} from './styled';

const CreateHiveMindModal = ({ isOpen, onClose, team, onCreateHiveMind }) => {
  const location = useLocation();

  const [name, setName] = useState();
  const [goal, setGoal] = useState();
  const [code, setCode] = useState();

  console.log('team: ', team);

  const onCreate = () => {
    onCreateHiveMind({
      name,
      goal,
      code,
    });
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeGoal = (event) => {
    setGoal(event.target.value);
  }

  const onChangeCode = (event) => {
    setCode(event.target.value);
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <Title><i>Hive•Mind:</i> A <b>collective</b> intelligence</Title>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name*"
            fullWidth
            variant="standard"
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="goal"
            label="Goal*"
            fullWidth
            variant="standard"
            onChange={onChangeGoal}
          />
          <TextField
            autoFocus
            margin="dense"
            id="code"
            label="3-Letter Code*"
            fullWidth
            variant="standard"
            onChange={onChangeCode}
          />
          <TeamText>
            Team: '{team.name}'
          </TeamText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateHiveMindModal;
