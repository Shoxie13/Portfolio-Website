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
              fontFamily: "Ubuntu",
              cursor: "default",
              fontWeight: "bold",
            }}
            variant="h4"
          >
            <div data-aos="fade-up" data-aos-duration="2500">
              &#8226;&#8226;&#32;&#8226;&#32; &#32;&#8226;&#32;&#8226;&#8226;
              Web Design &#8226;&#32;&#8226;&#32;&#8226;
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 50,
            right: 20,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              cursor: "default",
              fontWeight: "bold",
            }}
            variant="h4"
          >
            <div data-aos="fade-up" data-aos-duration="2500">
              &#8226;&#8226;&#32;&#8226;&#32;&#32;&#8226;&#32;&#8226;&#8226;
              Portfolio &#8226;&#32;&#8226;&#32;&#8226;
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 35,
            left: 15,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
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
              &#8226;&#32;&#8226;&#32;&#8226; Tareq Abdi
              &#8226;&#8226;&#32;&#8226;&#8226;
            </div>
          </Typography>
        </Box>
      </ThemeProvider>
      <Box sx={{ position: "absolute", bottom: 15, right: 0 }}>
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
