import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

function Navbar() {
  const { username, profilepicture } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const divRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onOpen = () => {
    setOpen(true);
    setAnchorEl(divRef.current);
  };
  const onClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const onBtnLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/");
    toast.success("Logout Success!");
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h4" fontWeight="bold">
          Connect.In
        </Typography>
        <Typography>Welcome {username}</Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={onOpen}
            ref={divRef}
            src={process.env.REACT_APP_API + profilepicture}
          />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/home">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/profile"
        >
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem onClick={onBtnLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
