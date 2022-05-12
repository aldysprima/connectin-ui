import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Typography,
  Divider,
  Stack,
  Button,
  Input,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

function UserDisplay(props) {
  const [edit, setEdit] = useState(false);
  const isVerified = false;
  const { username, email } = useSelector((state) => state);

  const onBtnEdit = () => {
    setEdit(true);
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
            <Typography>Verified User</Typography>
          ) : (
            <Button variant="contained">Resend Verification Email</Button>
          )}
        </Stack>
      </Stack>
      <Stack spacing={2} my="30px">
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Fullname:
          </Typography>
          <Typography variant="p" color="#3498db">
            Your Full Name
          </Typography>
        </Stack>
        <Divider />
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Username:
          </Typography>
          <Typography variant="p" color="#3498db">
            {username}
          </Typography>
        </Stack>
        <Divider />
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Email:
          </Typography>
          <Typography variant="p" color="#3498db">
            {email}
          </Typography>
        </Stack>
        <Divider />
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Bio:
          </Typography>
          <Typography variant="p" color="#3498db">
            This is my Bio
          </Typography>
        </Stack>
        <Divider />
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Address:
          </Typography>
          <Typography variant="p" color="#3498db">
            This is my Bio
          </Typography>
        </Stack>
      </Stack>
      <Button onClick={onBtnEdit} variant="contained" startIcon={<Edit />}>
        Edit Profile
      </Button>
    </Box>
  );
}

export default UserDisplay;
