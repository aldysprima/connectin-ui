import React from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import UserDisplay from "../Components/UserDisplay";

function Profile() {
  return (
    <Box bgcolor="#ecf0f1" height="750px">
      <Navbar />
      <Stack direction="row">
        <Sidebar />
        <UserDisplay />
      </Stack>
    </Box>
  );
}

export default Profile;
