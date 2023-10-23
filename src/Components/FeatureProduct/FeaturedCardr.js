import React from "react";
import { Stack, Typography, Box, Paper, Rating } from "@mui/material";

import DividerComponet from "../Controls/DividerComponet";
function FeaturedCard({ products, index }) {
  const { id, title, price, image } = products;

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          height: "230px",
          width: "200px",
          padding: "10px",
        }}
      >
        {index % 3 == 0 ? (
          <Box
            sx={{
              marginLeft: "150px",
              height: "20px",
              width: "40px",
              backgroundColor: "pink",
              padding: "2px",
              color: "white",
              textAlign: "center",
            }}
          >
            -10%
          </Box>
        ) : (
          <Box
            sx={{
              marginLeft: "150px",
              height: "20px",
              width: "40px",
              backgroundColor: "blue",
              padding: "2px",
              color: "white",
              textAlign: "center",
            }}
          >
            New
          </Box>
        )}
        {/*<-----Divider component ------>*/}
        <DividerComponet direction="horizontal" height="5px" />
        <Box
          sx={{
            height: "100px",
            width: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt="product "
            style={{
              height: "100px",
              width: "100px",
              backgroundBlendMode: "multiply",
            }}
          />
        </Box>
        <DividerComponet direction="horizontal" height="15px" />
        <Typography sx={{ fontSize: "10px" }}>{title}</Typography>
        <DividerComponet direction="horizontal" height="5px" />
        {/*<-----Rating component ------>*/}
        <Rating name="size-small" defaultValue={4} size="small" />
        <DividerComponet direction="horizontal" height="5px" />
        <Stack direction="row" spacing={2}>
          <Typography>${price}</Typography>
          <Typography> {id % 2 !== 0 ? `$${price}` : null}</Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default FeaturedCard;
