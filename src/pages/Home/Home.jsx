import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../utils/configParticles";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Dial from "../../components/Dial/Dial";

import "./Home.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
  return (
    <Container className="AppHomeWrapper" maxWidth="false">
      <Box container className="AppParticles">
        <Particles height="100vh" params={particlesConfig} />
      </Box>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 30,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Monospace",
              letterSpacing: 6,
              cursor: "default",
              fontWeight: "bold",
              zIndex: 999999,
            }}
            variant="h4"
          >
            Web Design
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 45,
            right: 35,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Monospace",
              cursor: "default",
              zIndex: 999999,
            }}
            variant="h4"
          >
            Portfolio
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 30,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Monospace",
              letterSpacing: 6,
              cursor: "default",
              fontWeight: "bold",
              zIndex: 999999,
            }}
            variant="h4"
          >
            Tareq Abdi
          </Typography>
        </Box>
      </ThemeProvider>
      <Box sx={{ position: "absolute", bottom: 16, right: 0 }}>
        <Dial />
      </Box>
    </Container>
  );
}
