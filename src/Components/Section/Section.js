import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { customerImage } from "../../Constatnt/config";
import ButtonComponent from "../Controls/ButtonComponent";

function Section(props) {
  return (
    <Box
      sx={{
        height: "600px",
        width: "100%",
        dsiplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#E7E5E5",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
        spacing={2}
      >
        <Grid xs={12} lg={6}>
          <Box
            sx={{
              height: "300px",
              width: "100%",
              // backgroundColor: "red",
              textAlign: { xs: "center" },
            }}
          >
            <Typography sx={{ fontSize: { xs: 20, lg: 40 } }}>
              Grab The Hottest
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, lg: 40 },
                // marginRight: { lg: "180px" },
              }}
            >
              Trends
            </Typography>
            <Typography sx={{ fontSize: { xs: 20, lg: 40 } }}>
              Paerl Hub application text
            </Typography>
            <ButtonComponent />
          </Box>
        </Grid>
        <Grid xs={12} lg={6}>
          <Box
            sx={{ height: "300px", width: "100%", backgroundColor: "black" }}
          >
            <img
              alt="person"
              src={customerImage}
              style={{ height: "300px", width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Section;
