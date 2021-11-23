import React, { useContext } from "react";
import { Snackbar } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";

import { StoreContext } from "../../contexts/StoreContext";

export default function AlertDrop() {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleAlertOpen = () => {
    setUiState({ ...uiState, alert: true });
  };

  const handleAlertClose = () => {
    setUiState({ ...uiState, alert: false });
  };

  return (
    <Box>
      <Button size="medium" onClick={handleAlertOpen}>
        Learn More
      </Button>
      <Snackbar
        open={uiState.alert}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          This feature is currently disabled!
        </Alert>
      </Snackbar>
    </Box>
  );
}
