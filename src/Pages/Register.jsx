import React from "react";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import background from "../assets/socmed1.png";

function Register() {
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor="#ecf0f1"
      padding={"50px"}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        height={"85vh"}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
        bgcolor="#F8FAFB"
        padding={"50px"}
        borderRadius="25px"
      >
        <div
          style={{
            width: "50vw",
            height: "75vh",
            padding: "20px",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        ></div>
        <Box width={"50vw"} height={"75vh"} padding="20px 100px">
          <Stack spacing={1}>
            <Typography variant="h4" fontWeight="bold" color="#2980b9">
              Connect.In
            </Typography>
            <Typography variant="h5" color="#3498db">
              Register Now! It's Forever Free
            </Typography>
            <Typography variant="p">
              Join the most anticipated social media platform right now!
            </Typography>
          </Stack>

          <Stack>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="dense"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              margin="dense"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              margin="dense"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction="row" gap={5} sx={{ marginTop: "10px" }}>
            <Button variant="contained">Register</Button>
            <Button variant="outlined">Get Login</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Register;
