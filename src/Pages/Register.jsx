import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import background from "../assets/socmed1.png";

function Register() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const showPassword = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const onClickRegister = () => {
    const newUser = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    };
    setLoading(true);

    Axios.post(process.env.REACT_APP_API + "/api/users/register", newUser)
      .then((respond) => {
        setLoading(false);
        setVisible(false);
        console.log(respond);
        toast.info(
          `Registration Succeed! Please Verify your Account within 2 minutes`
        );
        emailRef.current.value = "";
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });
  };
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
              label="Username"
              variant="outlined"
              margin="dense"
              type="text"
              inputRef={usernameRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="dense"
              type="email"
              inputRef={emailRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="dense"
              type={visible ? "text" : "password"}
              inputRef={passwordRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              margin="dense"
              type={visible ? "text" : "password"}
              inputRef={confirmPasswordRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
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
          </Stack>
          <Stack direction="row" gap={5} sx={{ marginTop: "10px" }}>
            <Button
              onClick={onClickRegister}
              variant="contained"
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </Button>
            <Button variant="outlined">
              <Link to="/" style={{ textDecoration: "none" }}>
                Get Login
              </Link>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Register;
