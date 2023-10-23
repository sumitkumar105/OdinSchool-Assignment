import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import ImageGallary from "./ImageGallary";
import DividerComponet from "../Controls/DividerComponet";
function ImageComponent(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: "50%",
            height: { lg: "100%", xs: "50%" },
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageGallary />
        </Grid>
        <DividerComponet direction="horizontal" height="10px" />
        <Grid item xs={12} lg={6} sx={{ width: "50%", height: "200px" }}>
          <Stack>
            <Typography variant="h4">Subscript & get upto</Typography>
            <Typography variant="h4">20% OFF</Typography>
            <Stack direction="row" spacing={1}>
              <Box
                sx={{ height: "40px", width: "40%", backgroundColor: "white" }}
              ></Box>
              <Box
                sx={{ height: "40px", width: "10%", backgroundColor: "grey" }}
              ></Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageComponent;
