import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ForgetPasswordForm from "../Components/ForgetPasswordForm";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
  const [visible, setVisible] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  let UID;

  useEffect(() => {
    Axios.get(
      process.env.REACT_APP_API + `/api/auth/verify-link/${params.token}`
    )
      .then((respond) => {
        setValidToken(true);
        UID = respond.data;
      })
      .catch((error) => {
        setValidToken(false);
      });
  });

  const onBtnChangePass = () => {
    setLoading(true);
    const newPassword = {
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
      UID: UID,
    };

    Axios.patch(
      process.env.REACT_APP_API + "/api/auth/change-password",
      newPassword
    )
      .then((respond) => {
        setLoading(false);
        toast.success(respond.data);
        navigate("/");
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
        UID = "";
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });

    console.log(newPassword);
  };

  const showPassword = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
      bgcolor="#ecf0f1"
    >
      {validToken ? (
        <Stack
          direction="column"
          spacing={3}
          height="400px"
          width="700px"
          bgcolor="white"
          sx={{ boxShadow: 3, px: "100px", py: "30px" }}
          borderRadius="25px"
        >
          <Typography variant="h5" textAlign="center">
            Reset Password
          </Typography>
          <Typography variant="p" textAlign="center">
            Enter your new password
          </Typography>

          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            type={visible ? "text" : "password"}
            inputRef={passwordRef}
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="dense"
            type={visible ? "text" : "password"}
            inputRef={confirmPasswordRef}
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
            disabled={loading}
            onClick={onBtnChangePass}
            variant="outlined"
          >
            Change Password
          </Button>
        </Stack>
      ) : (
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" textAlign="center">
            BAD REQUEST
          </Typography>
          <Typography textAlign="center">
            It looks like your link is invalid or already expired
          </Typography>
          <Typography textAlign="center">
            Don't Worry, You can resend Password reset link below{" "}
          </Typography>
          <ForgetPasswordForm
            headingText="Resend Password Reset Link"
            detailText="Enter your registered email below to receive password reset instruction"
            inputLabel="Email"
            inputType="email"
            buttonText="Send Me a New Link !"
          />
        </Stack>
      )}
    </Grid>
  );
};

export default ResetPassword;
