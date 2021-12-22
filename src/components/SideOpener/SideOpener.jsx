import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home as HomeM } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ImageListItem from "@mui/material/ImageListItem";

import { Link } from "react-router-dom";

import { StoreContext } from "../../contexts/StoreContext";

import logo from "./pictures/HostLogo.png";
import "./SideOpener.css";

const links = [
  {
    id: 0,
    name: "Home",
    icon: <HomeM sx={{ color: "white" }} />,
    link: "/home",
  },
  {
    id: 1,
    name: "Projects",
    icon: <AccountTreeIcon sx={{ color: "white" }} />,
    link: "/projects",
  },
  {
    id: 2,
    name: "About",
    icon: <InfoIcon sx={{ color: "white" }} />,
    link: "/about",
  },
];

export default function SideOpener() {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleDrawerClose = () => {
    setUiState({ ...uiState, drawer: false });
  };

  return (
    <Box container>
      <Drawer open={uiState.drawer} onClose={handleDrawerClose}>
        <Box>
          <ImageListItem
            sx={{
              width: 100,
              height: 200,
              position: "fixed",
              bottom: 0,
              left: 65,
            }}
          >
            <img src={logo} alt="HostLogo" loading="lazy" />
          </ImageListItem>
        </Box>
        <Box
          id="menuOptions"
          sx={{
            height: "100%",
            width: "250px",
            bgcolor: "#292828",
            "& .MuiListItem-root": {
              bgcolor: "inherit",
              border: 1,
              borderRadius: 2,
              borderColor: "lightgray",
              mb: 1,
              mt: 1,
              mr: 2,
              ml: 2,
              width: "auto",
              height: "40px",
            },
            "& .MuiListItem-root:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          {links.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <ListItem button onClick={handleDrawerClose}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      color: "white",
                    }}
                  />
                </ListItem>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
}
