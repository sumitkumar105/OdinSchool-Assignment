import React from "react";
import { Stack, Paper, Typography, Box, Grid } from "@mui/material";

function ProductServiceCard({ info }) {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            marginLeft: { xs: "30px" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Grid item xs={12} lg={4}>
            <Paper
              elevation={3}
              sx={{
                height: "80px",
                width: "220px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {info.icon}
              <Stack
                direction="column"
                spacing={0.5}
                sx={{ marginLeft: "10px" }}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  {info.heading}
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "grey" }}>
                  {info.text}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProductServiceCard;
