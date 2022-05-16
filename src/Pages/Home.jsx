import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import AddPost from "../Components/AddPost";

function Home() {
  const global = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (global.status === 0) {
      navigate("/profile");
    }
  });

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
