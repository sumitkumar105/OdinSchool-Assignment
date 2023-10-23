import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import DividerComponet from "../Controls/DividerComponet";
import CategoriesCard from "./CategoriesCard";
function CategoriesComponent({ Product, category }) {
  console.log(category);
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
        Category
      </Typography>
      <Typography variant="h5" sx={{ marginRight: { xs: "70px" } }}>
        Shop by Category
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
          marginLeft: { xs: "40px" },
        }}
      >
        {Product?.map((product, index) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={3} key={index}>
                <CategoriesCard products={product} />
              </Grid>
            </>
          );
        })}
      </Grid>
      <DividerComponet direction="horizontal" height="30px" />
    </Box>
  );
}

export default CategoriesComponent;
