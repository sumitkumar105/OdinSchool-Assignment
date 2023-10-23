import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { imageUrl } from "../../Constatnt/NavData";
import DividerComponet from "../Controls/DividerComponet";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function CategoriesCard({ products }) {
  const { category, title, image } = products;
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          height: "200px",
          width: "300px",
          // backgroundColor: "cyan",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <Stack>
            <Typography variant="h5">{category}</Typography>
            <DividerComponet direction="horizontal" height="10px" />
            <Typography sx={{ fontSize: "10px" }}>{title}</Typography>
            <DividerComponet direction="horizontal" height="10px" />
            <Stack direction="row" spacing={1}>
              <Typography sx={{ color: "red" }}>Explore Items</Typography>
              <TrendingFlatIcon sx={{ color: "red" }} />
            </Stack>
          </Stack>
          <img
            src={image}
            alt="product "
            style={{
              height: "150px",
              width: "100px",
              backgroundBlendMode: "multiply",
            }}
          />
        </Stack>
      </Paper>
    </Box>
  );
}

export default CategoriesCard;
