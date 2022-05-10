import React from "react";
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

function UserDisplay() {
  const isVerified = false;
  return (
    <Box flex={4} p="50px">
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Avatar
            sx={{ width: "150px", height: "150px", marginBottom: "20px" }}
          />
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
        </Box>
        <Box sx={{ marginLeft: "-800px" }}>
          <Typography margin="25px 0" fontWeight="bold">
            Aldy Septian Prima
          </Typography>
          <Typography>Bekasi, Indonesia</Typography>
        </Box>
        <Stack>
          {isVerified ? (
            <Typography>Verified User</Typography>
          ) : (
            <Button variant="contained">Resend Verification Email</Button>
          )}
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h6">Username</Typography>
        <Divider />
        <Typography variant="h6">Bio</Typography>
        <Divider />
        <Typography variant="h6">Email</Typography>
        <Divider />
        <Typography variant="h6">Address</Typography>
        <Button variant="contained" startIcon={<Edit />}>
          Edit Profile
        </Button>
      </Stack>
    </Box>
  );
}

export default UserDisplay;
