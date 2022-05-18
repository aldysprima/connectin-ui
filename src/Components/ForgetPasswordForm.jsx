import React, { useRef, useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { Button, Stack, TextField, Typography } from "@mui/material";

const ForgetPasswordForm = (props) => {
  const [loading, setLoading] = useState(false);
  const email = useRef("");

  const onBtnSendEmail = () => {
    const data = {
      email: email.current.value,
    };

    setLoading(true);

    Axios.post(process.env.REACT_APP_API + "/api/auth/send-email", data)
      .then((respond) => {
        console.log(respond);
        toast.success(respond.data);
        setLoading(false);
        email.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
        setLoading(false);
      });
  };
  return (
    <Stack
      direction="column"
      spacing={3}
      height="300px"
      width="700px"
      bgcolor="white"
      sx={{ boxShadow: 3, px: "100px", py: "30px" }}
      borderRadius="25px"
    >
      <Typography variant="h5" textAlign="center">
        {props.headingText}
      </Typography>
      <Typography variant="p" textAlign="center">
        {props.detailText}
      </Typography>

      <TextField
        id="outlined-basic"
        label={props.inputLabel}
        variant="outlined"
        type={props.inputType}
        inputRef={email}
      />

      <Button onClick={onBtnSendEmail} variant="outlined" disabled={loading}>
        {props.buttonText}
      </Button>
    </Stack>
  );
};

export default ForgetPasswordForm;
