import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SideOpener from "../SideOpener/SideOpener";

import { StoreContext } from "../../contexts/StoreContext";

export default function NavBar() {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleDrawerOpen = () => {
    setUiState({ ...uiState, drawer: true });
  };

  return (
    <Box>
      <AppBar
        edge="start"
        sx={{
          position: "static",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ border: 1, borderRadius: 3 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideOpener />
    </Box>
  );
}
