import React from "react";
import { Divider } from "@mui/material";
function DividerComponet({ direction, height }) {
  return (
    <div>
      {/*<-----Divider component------>*/}
      <Divider
        orientation={direction}
        sx={{ border: "none", height: height }}
      />
    </div>
  );
}

export default DividerComponet;
