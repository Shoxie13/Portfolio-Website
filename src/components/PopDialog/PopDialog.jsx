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

export default function PopDialog() {
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
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
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
