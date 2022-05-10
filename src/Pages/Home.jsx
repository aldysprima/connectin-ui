import React from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import AddPost from "../Components/AddPost";

function Home() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" gap={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost />
    </Box>
  );
}

export default Home;
