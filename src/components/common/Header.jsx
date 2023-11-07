import React, { useState } from "react";
import { getCategoryMovies } from "../../services/api";
import { API_POPULAR } from "../../constants/constants";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";

import { logoUrl } from "../../constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HeaderMenu from "./HeaderMenu";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  justify-content: space-between;
  color: white !important;

  & > * {
    padding: 0 8px;
    color: white !important;
    background-color: transparent !important;
  }

  & > div {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    color: white !important;

    & > p {
      font-weight: 600;
      font-size: 14px;
      padding: 0 3px;
      background-color: transparent;
      color: white !important;
    }
  }
  & > p {
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    color: white !important;
  }
`;
const StyledInputbase = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
  background-color: white !important;
  color: white !important;
`;

const Logo = styled("img")({
  width: 60,
});

const Header = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = async () => {
    setOpen(null);
    await getCategoryMovies(API_POPULAR);
  };

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Logo src={logoUrl} alt="logo" />
          <Box onClick={handleOpen}>
            <MenuIcon />
            <Typography>Menu</Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
          <StyledInputbase />
          <Typography>
            IMDB
            <Typography component="span" style={{ fontSize: 14 }}>
              Pro
            </Typography>{" "}
          </Typography>
          <Box>
            <BookmarkAddIcon />
            <Typography>Watchlist</Typography>
          </Box>
          <Typography>Sing In</Typography>
          <Box>
            <Typography>EN</Typography>
            <ArrowDropDownIcon />
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Header;
