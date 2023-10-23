import React from "react";
import { Box, Stack, Grid } from "@mui/material";
import { customerService, policies, aboutData } from "../../Constatnt/config";
import SocialInfo from "./SocialInfo";
import ServiceCard from "./ServiceCard";

function Footer(props) {
  return (
    <Box
      sx={{
        width: "80%",
      }}
    >
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{ marginLeft: { xs: "10px", lg: "130px" } }}
      >
        <Grid item xs={12} lg={3}>
          <SocialInfo />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ServiceCard heading="Customer Service" service={customerService} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Stack sx={{ height: "300px", width: "100%" }}>
            <ServiceCard heading="Service & Policies" service={policies} />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Stack sx={{ height: "300px", width: "100%" }}>
            <ServiceCard heading="About Us" service={aboutData} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
