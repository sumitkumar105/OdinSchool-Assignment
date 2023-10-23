import React from "react";
import { Typography, Stack, Paper, Avatar, Rating } from "@mui/material";
import DividerComponet from "../Controls/DividerComponet";
function CustomerCard({ customerInfo }) {
  const { image, customerName, location, description } = customerInfo;
  return (
    <Paper
      elevation={1}
      sx={{
        height: "400px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 100, height: 100 }} />

      <DividerComponet direction="horizontal" height="10px" />
      <Typography variant="h6"> {customerName}</Typography>
      <DividerComponet direction="horizontal" height="5px" />
      <Typography sx={{ fontSize: "13px", color: "grey" }}>
        {location}
      </Typography>
      <DividerComponet direction="horizontal" height="30px" />
      <p style={{ fontSize: "13px", color: "grey" }}>{description}</p>
      <DividerComponet direction="horizontal" height="30px" />
      <Stack direction="row" spacing={2} alignItems="center">
        <Rating name="size-small" defaultValue={4} size="small" />
        <Typography>4.0</Typography>
      </Stack>
    </Paper>
  );
}

export default CustomerCard;
