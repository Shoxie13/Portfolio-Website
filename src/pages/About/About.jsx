import React, { useEffect } from "react";
import AOS from "aos";

import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

import "./About.css";
import wm from "./pictures/tarik1.jpeg";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box container className="AboutWrapper">
      <Box container className="IntroWrapper">
        <Box sx={{ width: "250px", ml: "35px" }}>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <Avatar
              sx={{ width: "auto", height: "auto" }}
              alt="Avatar Logo"
              src={wm}
            />
          </div>
        </Box>
        <ThemeProvider theme={theme}>
          <Typography
            sx={{ ml: "20px", fontFamily: "Monospace", cursor: "default" }}
            variant="h4"
          >
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              This is me! Yeah that's right, Tareq.
            </div>
          </Typography>
        </ThemeProvider>
      </Box>
      <Box className="IntroductionWrapper">
        <ThemeProvider theme={theme}>
          <Typography
            sx={{ fontFamily: "Monospace", cursor: "default" }}
            variant="h6"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              Currently I live in Toronto, Canada. Being a student is a tough
              job but I am managing it somehow. Below you can find the skills
              that I have gathered through my years in college and on the
              project page you can find what I have worked on in my spare time.
            </div>
          </Typography>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
