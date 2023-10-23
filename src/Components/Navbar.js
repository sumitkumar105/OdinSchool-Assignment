import React, { useState } from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import { NavHeading } from "../Constatnt/NavData";
import NavIcons from "./NavIcons";
import DrawerComponent from "./Controls/DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrwawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Stack
      direction="row"
      sx={{ height: "80px" }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <MenuIcon
        onClick={handleOpenDrwawer}
        sx={{
          fontSize: 40,
          color: "black",
          display: { xs: "block", md: "none", lg: "none" },
        }}
      />
      {openDrawer && (
        <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
          <DrawerComponent
            open={openDrawer}
            handleCloseDrawer={handleOpenDrwawer}
          />
        </Box>
      )}
      {/*<-----NavHeadingComponent------>*/}
      <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          //
        >
          {NavHeading?.map((heading, index) => {
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>{heading.title}</Typography>
                {heading.icon}
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Typography variant="h5">
        PEARL<span style={{ color: "red" }}>HUB</span>
      </Typography>
      {/*<-----NavIcons componets------>*/}
      <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
        {" "}
        <NavIcons />
      </Box>
    </Stack>
  );
}

export default Navbar;
