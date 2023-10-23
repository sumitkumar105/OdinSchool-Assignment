import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DividerComponet from "../Controls/DividerComponet";
function SocialInfo(props) {
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          height: "300px",
          width: "100%",

          textAlign: { xs: "center" },
        }}
      >
        <Typography variant="h5">
          PEARL<span style={{ color: "red" }}>HUB</span>
        </Typography>
        <DividerComponet direction="horizontal" height="50px" />
        <Typography sx={{ color: "grey" }}>
          It is a long established fact that a reader will be distracted by the
          readable will be.
        </Typography>
        <DividerComponet direction="horizontal" height="30px" />
        <Stack direction="row" spacing={1}>
          <InstagramIcon />
          <Divider orientation="vertical" variant="middle" flexItem />
          <TwitterIcon />
          <Divider orientation="vertical" variant="middle" flexItem />
          <FacebookIcon />
          <Divider orientation="vertical" variant="middle" flexItem />
          <YouTubeIcon />
        </Stack>
      </Stack>
    </div>
  );
}

export default SocialInfo;
