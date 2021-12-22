import React, { useEffect } from "react";
import AOS from "aos";

import { Container, Avatar, Typography, Box } from "@mui/material";

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
    <Container>
      <Box container className="AboutWrapper">
        <ThemeProvider theme={theme}>
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

            <Typography
              sx={{ ml: "20px", fontFamily: "Ubuntu", cursor: "default" }}
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
          </Box>
          <Box container className="IntroductionWrapper">
            <Typography
              sx={{
                fontFamily: "Ubuntu",
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
              sx={{ fontFamily: "Ubuntu", cursor: "default" }}
              variant="h6"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                Currently I live in Toronto, Canada. I started my journey in
                Canada as a student in the beginning of 2020.
                <hr /> Being a student is a tough job nowadays but I am managing
                it somehow. My passion for web developing was born in my last
                course that I took in college, learned a lot in it and yet I
                have so much to explore going forward. I cannot wait to do that
                and also work in a team that have the same vision as me.
                <hr /> Below you can find the skills that I have gathered
                through my years in college and on the project page you can find
                what I have worked on in my spare time. <hr />
              </div>
            </Typography>
          </Box>
          <Box container className="SkillsBox">
            <Typography
              sx={{
                fontFamily: "Ubuntu",
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
            <div data-aos="zoom-in" data-aos-duration="1000">
              <Box
                container
                sx={{
                  border: 7,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Ubuntu",
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
                    fontFamily: "Ubuntu",
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
              </Box>
            </div>
            <Box container className="IntroductionWrapper">
              <Typography
                sx={{
                  fontFamily: "Ubuntu",
                  cursor: "default",
                  fontSize: "bold",
                }}
                variant="h4"
              >
                <div data-aos="zoom-in" data-aos-duration="1000">
                  Projects In Progress
                </div>
              </Typography>
              <Typography
                sx={{ fontFamily: "Ubuntu", cursor: "default" }}
                variant="h6"
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                >
                  <ul>
                    <li>Weather-API & Weather-APP (nodeJS, React)</li>
                    <li>ParkingApp (C++)</li>
                    <li>Online Store App (nodeJS, React)</li>
                  </ul>
                </div>
              </Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </Container>
  );
}
