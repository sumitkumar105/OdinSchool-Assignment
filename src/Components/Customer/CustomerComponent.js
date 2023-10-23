import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import DividerComponet from "../Controls/DividerComponet";
import { cutsomerData } from "../../Constatnt/config";
import CustomerCard from "./CustomerCard";
function CustomerComponent(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ marginRight: { xs: "70px" }, color: "red" }}>
        Testonomial
      </Typography>
      <Typography variant="h5" sx={{ marginRight: { xs: "70px" } }}>
        What is our customer say
      </Typography>
      <DividerComponet direction="horizontal" height="30px" />
      <Grid
        container
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
        spacing={2}
        sx={{
          width: "100%",
          flexDirection: { xs: "column", lg: "row" },
          marginLeft: { xs: "35px" },
        }}
      >
        {cutsomerData?.map((info, index) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={3} key={index}>
                <CustomerCard customerInfo={info} />
              </Grid>
            </>
          );
        })}
      </Grid>
      <DividerComponet direction="horizontal" height="30px" />
    </Box>
  );
}

export default CustomerComponent;
