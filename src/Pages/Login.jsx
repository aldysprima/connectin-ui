import React from "react";
import { Link as LinkTo } from "react-router-dom";
import {
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";

function Login() {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      direction={"row"}
      // spacing={2}
      bgcolor="#ecf0f1"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={"50vw"} height={"50vh"} px="50px">
        <Typography fontWeight={500} variant={"h1"} color="#2980b9">
          Connect.In
        </Typography>
        <Typography variant={"h3"} color="#3498db">
          Connect With Your friends has never been this easy
        </Typography>
      </Box>
      <Box width={"50vw"} height={"50vh"} px={"100px"}>
        <Stack spacing={2}>
          <TextField
            label="Username/Email"
            variant="outlined"
            margin={"normal"}
          />
          <TextField label="Password" variant="outlined" type={"password"} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2980b9",
            }}
          >
            Log in
          </Button>
          <Link component="button" underline="hover" fontSize={"17px"}>
            Forgotten Password?
          </Link>
          <Divider />
          <LinkTo to="/register" style={{ textDecoration: "none" }}>
            <Button
              sx={{ width: "100%", textDecoration: "none" }}
              variant="outlined"
            >
              Create New Account
            </Button>
          </LinkTo>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Login;
