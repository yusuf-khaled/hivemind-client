import React, { useState } from 'react';
import get from 'lodash/get';
import {
  Button, Dialog, DialogContent, TextField,
  DialogActions, Select, MenuItem,
} from '@material-ui/core';

import { useTeamByMemberId } from '../../api/hooks/team';

import Config from '../../Config';
import constants from '../../Constants';

import {
  Title,
  DropdownContainer,
  DropdownInputLabel,
} from './styled';


const { brainWaveStatuses, brainWaveTypes, dueDateOptions } = constants;
const statuses = Object.values(brainWaveStatuses);
const types = Object.values(brainWaveTypes);

const CreateBrainWaveModal = ({ isOpen, onClose, onCreateBrainWave }) => {
  const { memberId } = Config;
  const { team } = useTeamByMemberId(memberId);
  const members = get(team, 'members', []);
  console.log('team:', team);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [assignedTo, setAssignedTo] = useState();
  const [dueAt, setDueAt] = useState(dueDateOptions[0]);
  const [type, setType] = useState(brainWaveTypes['practice']);
  const [status, setStatus] = useState(brainWaveStatuses['todo']);

  console.log('team: ', team);

  const onCreate = () => {
    const assignedToMember = members.find((m) => m.name === assignedTo);
    const assignedToUserId = assignedToMember.id;
    const typeValue = Object.keys(brainWaveTypes).find(key => brainWaveTypes[key] === type);
    const statusValue = Object.keys(brainWaveStatuses).find(key => brainWaveStatuses[key] === status);
    onCreateBrainWave({
      assignedToUserId,
      dueAt,
      title,
      description,
      type: typeValue,
      status: statusValue,
    });
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const onChangeType = (event) => {
    setType(event.target.value);
  }

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  }

  const onChangeAssignTo = (event) => {
    setAssignedTo(event.target.value);
  }

  const onChangeDueAt = (event) => {
    setDueAt(event.target.value);
  }

  return (
    <div>
      <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose}>
        <Title><i>Brain•Wave:</i> An electrical <b>impulse</b> in the brain</Title>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title*"
            fullWidth
            variant="standard"
            onChange={onChangeTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description*"
            fullWidth
            variant="standard"
            onChange={onChangeDescription}
          />
          <DropdownContainer>
            <DropdownInputLabel id="status-input">Type*</DropdownInputLabel>
            <Select
              id="type"
              value={type}
              label="Type"
              onChange={onChangeType}
            >
              {types.map(typeOption => (
                <MenuItem value={typeOption}>{typeOption}</MenuItem>
              ))}
            </Select>
          </DropdownContainer>
          <DropdownContainer></DropdownContainer>
          <DropdownContainer>
            <DropdownInputLabel id="status-input">Status*</DropdownInputLabel>
            <Select
              id="status"
              value={status}
              label="Status"
              onChange={onChangeStatus}
            >
              {statuses.map(statusOption => (
                <MenuItem value={statusOption}>{statusOption}</MenuItem>
              ))}
            </Select>
          </DropdownContainer>
          <DropdownContainer>
            <DropdownInputLabel id="assign-to-input">Assign To*</DropdownInputLabel>
            <Select
              id="assignee"
              value={assignedTo}
              label="Assign To"
              onChange={onChangeAssignTo}
            >
              {members.map(member => (
                <MenuItem value={member.name}>{member.name}</MenuItem>
              ))}
            </Select>
          </DropdownContainer>
          <DropdownContainer>
            <DropdownInputLabel id="due-at">Due*</DropdownInputLabel>
            <Select
              id="due"
              value={dueAt}
              label="Due At"
              onChange={onChangeDueAt}
            >
              {dueDateOptions.map(dueDateOption => (
                <MenuItem value={dueDateOption}>{dueDateOption}</MenuItem>
              ))}
            </Select>
          </DropdownContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateBrainWaveModal;
