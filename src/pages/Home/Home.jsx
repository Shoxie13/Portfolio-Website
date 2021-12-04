import React, { useEffect } from "react";
import AOS from "aos";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Dial from "../../components/Dial/Dial";

import ParticlesComponent from "../../components/Particles/ParticlesComponent";

import "./Home.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box container>
      <ParticlesComponent />

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
            }}
            variant="h4"
          >
            <div data-aos="fade-up" data-aos-duration="2500">
              Web Design
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 35,
            right: 20,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Monospace",
              cursor: "default",
              letterSpacing: 6,
            }}
            variant="h4"
          >
            <div data-aos="fade-up" data-aos-duration="2500">
              Portfolio
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
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
            }}
            variant="h4"
          >
            <div
              data-aos="fade-right"
              data-aos-anchor="#example"
              data-aos-duration="2500"
            >
              Tareq Abdi
            </div>
          </Typography>
        </Box>
      </ThemeProvider>
      <Box sx={{ position: "absolute", bottom: 13, right: 0 }}>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example"
          data-aos-duration="2500"
        >
          <Dial />
        </div>
      </Box>
    </Box>
  );
}
