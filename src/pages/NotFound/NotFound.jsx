import React from "react";
import { Box } from "@mui/system";

import "./NotFound.css";

export default function NotFound() {
  return (
    <Box sx={{ color: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "inherit",
        }}
      >
        <h1>Error 404</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "inherit",
        }}
      >
        <h2>Page Not Found</h2>
      </Box>
    </Box>
  );
}
