import React from "react";

import Box from "@mui/system/Box";
import { Container } from "@mui/material";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import "./Dial.css";

export default function Dial() {
  const socialMedia = [
    {
      id: 0,
      name: "LinkedIn",
      href: "https://linkedin.com/in/tabdi",
      src: <LinkedInIcon fontSize="medium" />,
    },
    {
      id: 1,
      name: "GitHub",
      href: "https://github.com/shoxie13",
      src: <GitHubIcon fontSize="medium" />,
    },
    {
      id: 2,
      name: "Email",
      href: `mailto: tarik.abdi13@gmail.com`,
      src: <EmailIcon fontSize="medium" />,
    },
  ];

  return (
    <Container>
      <Box container sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial ariaLabel="SpeedDial" icon={<SpeedDialIcon />}>
          {socialMedia.map((item, index) => (
            <SpeedDialAction
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              key={index}
              icon={item.src}
              tooltipTitle={item.name}
            ></SpeedDialAction>
          ))}
        </SpeedDial>
      </Box>
    </Container>
  );
}
