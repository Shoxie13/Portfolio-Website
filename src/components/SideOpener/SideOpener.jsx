import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
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

export default function SideOpener() {
  const {
    ui: [uiState, setUiState],
  } = useContext(StoreContext);

  const handleDrawerClose = () => {
    setUiState({ ...uiState, drawer: false });
  };

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
      link: "#",
    },
  ];

  return (
    <Box sx={{ color: "white" }}>
      <Drawer open={uiState.drawer} onClose={handleDrawerClose}>
        <Box>
          <ImageListItem
            sx={{
              width: 100,
              height: 200,
              position: "absolute",
              bottom: 0,
              left: 65,
            }}
          >
            <img src={logo} alt="Hello World" loading="lazy" />
          </ImageListItem>
        </Box>
        <Box className="sideOpener">
          {links.map((item, index) => {
            return (
              <Box key={item.id}>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <ListItem button onClick={handleDrawerClose}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        color: "white",
                      }}
                    />
                    <Divider />
                  </ListItem>
                </Link>
              </Box>
            );
          })}
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
