import React, { useContext } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";

import { StoreContext } from "../../contexts/StoreContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopDialog(props) {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleDialogClose = () => {
    setUiState({ ...uiState, dialog: false });
  };
  const handleDialogOpen = () => {
    setUiState({ ...uiState, dialog: true });
  };

  return (
    <>
      <Button size="medium" onClick={handleDialogOpen}>
        Learn More
      </Button>
      <Dialog
        onClose={handleDialogClose}
        open={uiState.dialog}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle onClose={handleDialogClose}>Modal title</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{props.value.extraInfo}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
