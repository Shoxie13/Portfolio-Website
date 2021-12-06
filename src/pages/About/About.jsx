import React, { useEffect } from "react";
import AOS from "aos";

import { Container, Avatar, Typography, Box } from "@mui/material";

import "./About.css";
import wm from "./pictures/tarik1.png";

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
    <Container>
      <Box container className="AboutWrapper">
        <Box container className="IntroWrapper">
          <Box sx={{ width: "200px" }}>
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
        <Box container className="IntroductionWrapper">
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                cursor: "default",
                fontSize: "bold",
              }}
              variant="h4"
            >
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                Introduction
              </div>
            </Typography>
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
                project page you can find what I have worked on in my spare
                time.
              </div>
            </Typography>
          </ThemeProvider>
        </Box>
        <Box container className="SkillsBox">
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                fontFamily: "Monospace",
                cursor: "default",
                fontSize: "bold",
              }}
              variant="h4"
            >
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                Skills Set
              </div>
            </Typography>
          </ThemeProvider>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Box
              container
              sx={{
                border: 8,
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    cursor: "default",
                  }}
                  variant="h6"
                >
                  <ul>
                    Languages
                    <li>JavaScript</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>CL/RPG</li>
                  </ul>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Monospace",
                    cursor: "default",
                  }}
                  variant="h6"
                >
                  <ul>
                    Skills
                    <li>Teamwork Skills</li>
                    <li>Adaptability</li>
                    <li>Software Logic</li>
                    <li>Troubleshooting</li>
                    <li>Programming</li>
                  </ul>
                </Typography>
              </ThemeProvider>
            </Box>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
