import React from "react";
import { Stack, Typography } from "@mui/material";
import DividerComponet from "../Controls/DividerComponet";
function ServiceCard({ service, heading }) {
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ height: "300px", width: "100%" }}
      >
        <Typography variant="h6">{heading}</Typography>
        <DividerComponet direction="horizontal" height="10px" />
        {service?.map((text, index) => {
          return (
            <>
              <Typography sx={{ color: "grey" }}>{text}</Typography>
              <DividerComponet direction="horizontal" height="15px" />
            </>
          );
        })}
      </Stack>
    </div>
  );
}

export default ServiceCard;
