import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  styled,
  ButtonGroup,
  Stack,
} from "@mui/material";

// Custom Component
const CustomModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledModal = (props) => {
  return (
    <CustomModal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box height="300px" width="400px" bgcolor="white" borderRadius={5} p={3}>
        <Stack alignItems="center" spacing="50px">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.text}
          </Typography>
          <Typography id="modal-modal-title" variant="p">
            Are you sure want to update user data?
          </Typography>
          <ButtonGroup>
            <Button onClick={props.onConfirm}>
              Confirm
            </Button>
            <Button onClick={props.onCancelConfirm} color="error">
              Cancel
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </CustomModal>
  );
};

export default StyledModal;
