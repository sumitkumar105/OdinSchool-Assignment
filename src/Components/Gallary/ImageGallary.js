import React from "react";
import { Box, Grid } from "@mui/material";
function ImageGallary(props) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "10px",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <>
              <Grid item lg={3} xs={6}>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {item}
                </Box>
              </Grid>
            </>
          );
        })}{" "}
      </Grid>
    </Box>
  );
}

export default ImageGallary;
