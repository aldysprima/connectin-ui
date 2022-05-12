import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import UserDisplay from "../Components/UserDisplay";

function Profile() {
  const { username, email } = useSelector((state) => state);

  return (
    <Box bgcolor="#ecf0f1" height="100vh">
      <Navbar />
      <Stack direction="row">
        <Sidebar />
        <UserDisplay username={username} email={email} />
      </Stack>
    </Box>
  );
}

export default Profile;
