import React from "react";

import { Menu, MenuItem } from "@mui/material";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);

  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        backgroundColor: openMenu ? "gray" : "",
        color: openMenu ? "white" : "",
      }}
    >
      <MenuItem
        onClick={handleClose}
        sx={{
          backgroundColor: openMenu ? "transparent !important" : "",
          color: openMenu ? "white !important" : "",
        }}
      >
        Popular
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        sx={{
          backgroundColor: openMenu ? "transparent !important" : "",
          color: openMenu ? "white !important" : "",
        }}
      >
        My account
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        sx={{
          backgroundColor: openMenu ? "transparent !important" : "",
          color: openMenu ? "white !important" : "",
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );
};

export default HeaderMenu;
