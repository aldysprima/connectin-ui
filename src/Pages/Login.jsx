import React, { useRef, useState } from "react";
import { Link as LinkTo, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import {
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const showPassword = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const onBtnLogin = () => {
    const loginCredential = {
      user: user.current.value,
      password: password.current.value,
    };

    setLoading(true);

    Axios.post(process.env.REACT_APP_API + "/api/auth/login", loginCredential)
      .then((respond) => {
        toast.success("Login Success!");
        setLoading(false);
        console.log(respond.headers);

        // Reset Input Field
        user.current.value = "";
        password.current.value = "";
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });

    console.log(loginCredential);
  };

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
            inputRef={user}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={visible ? "text" : "password"}
            inputRef={password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    size="large"
                    onClick={showPassword}
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2980b9",
            }}
            onClick={onBtnLogin}
            disabled={loading}
          >
            Log in
          </Button>
          <Link component="button" underline="hover" fontSize={"17px"}>
            Forgotten Password?
          </Link>
          <Divider />
          <LinkTo to="/register" style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined">
              Create New Account
            </Button>
          </LinkTo>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Login;
