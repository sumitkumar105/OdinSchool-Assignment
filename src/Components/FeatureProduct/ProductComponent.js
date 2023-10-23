import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import DividerComponet from "../Controls/DividerComponet";
import FeaturedCard from "./FeaturedCardr";
function ProductComponent({ Product, btndisplay }) {
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
        Trendings
      </Typography>
      <Typography variant="h5" sx={{ marginRight: { xs: "70px" } }}>
        Featured Product
      </Typography>
      <DividerComponet direction="horizontal" height="30px" />
      <Grid
        container
        spacing={2}
        sx={{
          width: "80%",
          flexDirection: { xs: "column", lg: "row" },
          marginLeft: { xs: "30px" },
        }}
      >
        {Product?.map((product, index) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={3} key={index}>
                <FeaturedCard products={product} index={index} />
              </Grid>
            </>
          );
        })}
      </Grid>
      <DividerComponet direction="horizontal" height="30px" />
      {btndisplay ? (
        <Button sx={{ marginRight: { xs: "80px" } }} variant="contained">
          Submit
        </Button>
      ) : null}
      <DividerComponet direction="horizontal" height="70px" />
    </Box>
  );
}

export default ProductComponent;
