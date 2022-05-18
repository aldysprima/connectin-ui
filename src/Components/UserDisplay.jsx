import React, { useState, useRef } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Box,
  Typography,
  Stack,
  Button,
  Input,
  ButtonGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import { toast } from "react-toastify";
import { Cancel, Edit, Save, Verified } from "@mui/icons-material";
import StyledModal from "./StyledModal";

function UserDisplay() {
  const [edit, setEdit] = useState(false);
  const [editPhoto, setEditPhoto] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saveImage, setSaveImage] = useState(null);

  const {
    username,
    email,
    uid,
    fullname,
    bio,
    address,
    profilepicture,
    status,
  } = useSelector((state) => state);
  const isVerified = status;
  const dispatch = useDispatch();
  // Ref to capture New Value When Edit Profile is clicked
  const fullnameRef = useRef();
  const userNameRef = useRef();
  const bioRef = useRef();
  const addressRef = useRef();

  // Event Handler

  const onBtnEdit = () => {
    setEdit(true);
  };

  const onBtnSave = () => {
    setOpen(true);
  };

  const onBtnCancel = () => {
    setEdit(false);
  };

  const onBtnClose = () => {
    setOpen(false);
  };

  // Event Handler Update Profile Picture
  const onBtnChangePicture = () => {
    setEditPhoto(true);
  };

  const onBtnCancelUpload = () => {
    setEditPhoto(false);
  };

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setSaveImage(uploaded);
  }

  const onBtnUploadImage = () => {
    let formData = new FormData();
    formData.append("image", saveImage);

    Axios.post(
      process.env.REACT_APP_API + "/api/users/add-profile-picture/" + uid,
      formData
    )
      .then((respond) => {
        toast.success(respond.data);
        Axios.get(process.env.REACT_APP_API + "/api/users/getuserbyid/" + uid)
          .then((respond2) => {
            dispatch({ type: "UPDATEPROFILE", payload: respond2.data });
            console.log("RESPOND DATA : ", respond2.data);
          })
          .catch((error) => {
            toast.error(error.response.data);
          });
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
    setEditPhoto(false);
  };
  const onBtnConfirmSave = () => {
    const newData = {
      fullname: fullnameRef.current.value,
      username: userNameRef.current.value,
      bio: bioRef.current.value,
      address: addressRef.current.value,
    };
    Axios.patch(
      process.env.REACT_APP_API + "/api/users/updateprofile/" + uid,
      newData
    )
      .then((respond) => {
        console.log(respond.data);
        toast.success("Update Data Success");

        Axios.get(process.env.REACT_APP_API + "/api/users/getuserbyid/" + uid)
          .then((respond2) => {
            dispatch({ type: "UPDATEPROFILE", payload: respond2.data });
          })
          .catch((error) => {
            toast.error(error.response.data);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
      });
    setOpen(false);
    setEdit(false);
    console.log("NEWDATA :", newData);
    // Reset Refs Value
    fullnameRef.current.value = null;
    userNameRef.current.value = null;
    bioRef.current.value = null;
    addressRef.current.value = null;
  };

  const onBtnResendToken = () => {
    setLoading(true);
    Axios.get(process.env.REACT_APP_API + "/api/auth/refresh-token", {
      headers: {
        UID: uid,
      },
    })
      .then((respond) => {
        setLoading(false);
        toast.success(respond.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });
  };

  const onBtnCancelSave = () => {
    setOpen(false);
  };

  return (
    <Box flex={4} p="50px">
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Avatar
            src={process.env.REACT_APP_API + profilepicture}
            sx={{ width: "150px", height: "150px", marginBottom: "20px" }}
          />

          {editPhoto ? (
            <div>
              <Input
                onChange={handleUploadChange}
                accept="image/*"
                id="formFile"
                multiple
                type="file"
                sx={{ marginBottom: "10px" }}
              />
              <Button
                onClick={onBtnUploadImage}
                variant="contained"
                component="span"
              >
                Upload
              </Button>
              <Button
                sx={{ marginLeft: "25px" }}
                onClick={onBtnCancelUpload}
                variant="contained"
                component="span"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button onClick={onBtnChangePicture} disabled={!Boolean(status)}>
              Change Profile Picture
            </Button>
          )}
        </Box>

        <Stack>
          {isVerified ? (
            <Tooltip title="Account Verified" placement="right-start">
              <IconButton color="primary">
                <Verified fontSize="large" />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="contained"
              onClick={onBtnResendToken}
              disabled={loading}
            >
              Resend Verification Email
            </Button>
          )}
        </Stack>
      </Stack>

      <Stack spacing={4} my="30px">
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Fullname
          </Typography>
          {edit ? (
            <Input
              placeholder="Full Name"
              fullWidth={true}
              inputRef={fullnameRef}
              defaultValue={fullname ? fullname : null}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              {fullname ? fullname : "Full Name"}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Username
          </Typography>
          {edit ? (
            <Input
              defaultValue={username}
              placeholder="Username"
              fullWidth={true}
              inputRef={userNameRef}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              {username}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Email
          </Typography>
          {edit ? (
            <Input defaultValue={email} fullWidth={true} disabled={true} />
          ) : (
            <Typography variant="p" color="#3498db">
              {email}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Bio
          </Typography>
          {edit ? (
            <Input
              placeholder="Enter Your Bio Here"
              fullWidth={true}
              inputRef={bioRef}
              defaultValue={bio ? bio : null}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              {bio ? bio : "Enter your bio"}
            </Typography>
          )}
        </Stack>
        <Stack maxWidth="50vw" direction="row" spacing="200px">
          <Typography width="100px" variant="p">
            Address
          </Typography>
          {edit ? (
            <Input
              placeholder="Enter Your Address Here"
              fullWidth={true}
              inputRef={addressRef}
              defaultValue={address ? address : null}
            />
          ) : (
            <Typography variant="p" color="#3498db">
              {address ? address : "Enter your Address"}
            </Typography>
          )}
        </Stack>
      </Stack>
      {edit ? (
        <ButtonGroup variant="outlined" sx={{ width: "300px" }}>
          <Button
            sx={{ width: "200px" }}
            startIcon={<Save />}
            color="primary"
            onClick={onBtnSave}
          >
            Save
          </Button>
          <Button startIcon={<Cancel />} color="error" onClick={onBtnCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          disabled={!Boolean(status)}
          onClick={onBtnEdit}
          variant="contained"
          startIcon={<Edit />}
        >
          Edit Profile
        </Button>
      )}

      <StyledModal
        open={open}
        onClose={onBtnClose}
        onConfirm={onBtnConfirmSave}
        onCancelConfirm={onBtnCancelSave}
        text="Confirm Changes"
      />
    </Box>
  );
}

export default UserDisplay;
