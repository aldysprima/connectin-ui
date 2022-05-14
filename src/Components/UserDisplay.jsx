import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Typography,
  Stack,
  Button,
  Input,
  ButtonGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Cancel, Edit, Save, Verified } from "@mui/icons-material";
import StyledModal from "./StyledModal";

function UserDisplay() {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const isVerified = true;
  const { username, email } = useSelector((state) => state);
  // Ref to capture New Value When Edit Profile is clicked
  const fullnameRef = useRef();
  const userNameRef = useRef();
  const bioRef = useRef();
  const addressRef = useRef();

  // Event Handler
  const onBtnEdit = () => {
    setEdit(true);
  };

  const onBtnSave = () => {
    setOpen(true);
  };

  const onBtnCancel = () => {
    setEdit(false);
  };

  const onBtnClose = () => {
    setOpen(false);
  };

  const onBtnConfirmSave = () => {
    const newData = {
      fullname: fullnameRef.current.value,
      username: userNameRef.current.value,
      bio: bioRef.current.value,
      address: addressRef.current.value,
    };
    setOpen(false);
    setEdit(false);
    console.log(newData);

    // Reset Refs Value
    fullnameRef.current.value = "";
    userNameRef.current.value = "";
    bioRef.current.value = "";
    addressRef.current.value = "";
  };

  const onBtnCancelSave = () => {
    setOpen(false);
  };

  return (
    <Box flex={4} p="50px">
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Avatar
            sx={{ width: "150px", height: "150px", marginBottom: "20px" }}
          />

          {edit ? (
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                sx={{ marginBottom: "10px" }}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          ) : null}
        </Box>

        <Stack>
          {isVerified ? (
            <Tooltip title="Account Verified" placement="right-start">
              <IconButton color="primary">
                <Verified fontSize="large" />
              </IconButton>
            </Tooltip>
          ) : (
            <Button variant="contained">Resend Verification Email</Button>
          )}
        </Stack>
      </Stack>

      <Stack spacing={4} my="30px">
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Fullname
          </Typography>
          {edit ? (
            <Input
              placeholder="Full Name"
              fullWidth={true}
              inputRef={fullnameRef}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              FullName
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Username
          </Typography>
          {edit ? (
            <Input
              defaultValue={username}
              placeholder="Username"
              fullWidth={true}
              inputRef={userNameRef}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              {username}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Email
          </Typography>
          {edit ? (
            <Input defaultValue={email} fullWidth={true} disabled={true} />
          ) : (
            <Typography variant="p" color="#3498db">
              {email}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Bio
          </Typography>
          {edit ? (
            <Input
              placeholder="Enter Your Bio Here"
              fullWidth={true}
              inputRef={bioRef}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              This is my Bio
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Address
          </Typography>
          {edit ? (
            <Input
              placeholder="Enter Your Address Here"
              fullWidth={true}
              inputRef={addressRef}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              This is my Address
            </Typography>
          )}
        </Stack>
      </Stack>
      {edit ? (
        <ButtonGroup variant="outlined" sx={{ width: "300px" }}>
          <Button
            sx={{ width: "200px" }}
            startIcon={<Save />}
            color="primary"
            onClick={onBtnSave}
          >
            Save
          </Button>
          <Button startIcon={<Cancel />} color="error" onClick={onBtnCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      ) : (
        <Button onClick={onBtnEdit} variant="contained" startIcon={<Edit />}>
          Edit Profile
        </Button>
      )}

      <StyledModal
        open={open}
        onClose={onBtnClose}
        onConfirm={onBtnConfirmSave}
        onCancelConfirm={onBtnCancelSave}
        text="Confirm Changes"
      />
    </Box>
  );
}

export default UserDisplay;
