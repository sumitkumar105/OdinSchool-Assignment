import React from "react";
import { Stack, Box, Badge, TextField, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
function NavIcons() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/*<-----Search filed------>*/}
      <TextField
        id="outlined-basic"
        variant="standard"
        placeholder="Search here..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {/*<-----Icons list------>*/}
      <Stack direction="row" spacing={2}>
        <PersonIcon />
        <FavoriteBorderIcon />
        <Badge badgeContent={1} color="error">
          <LocalMallIcon color="action" />
        </Badge>
      </Stack>
    </Stack>
  );
}

export default NavIcons;
