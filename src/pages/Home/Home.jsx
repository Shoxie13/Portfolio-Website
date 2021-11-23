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
      <Box container>
        <Particles
          height="100vh"
          maxHeight="100vh"
          width="auto"
          params={particlesConfig}
        />
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              position: "absolute",
              top: 5,
              right: 10,
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
              top: 35,
              right: 15,
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
              bottom: 0,
              left: 15,
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
        <Box sx={{ position: "absolute", bottom: 10, right: 0 }}>
          <Dial />
        </Box>
      </Box>
    </Container>
  );
}
