import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";

import { StoreContext } from "../../contexts/StoreContext";

export default function NavBar() {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleDrawerOpen = () => {
    setUiState({ ...uiState, drawer: true });
  };

  return (
    <Container>
      <Box>
        <AppBar
          edge="start"
          position="absolute"
          sx={{
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2, border: 1, borderRadius: 5 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
