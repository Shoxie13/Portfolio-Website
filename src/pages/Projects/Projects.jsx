import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";

import AOS from "aos";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import PopDialog from "../../components/PopDialog/PopDialog";
import AlertDrop from "../../components/Alert/Alert";

import music from "./pictures/music.jpg";
import restaurant from "./pictures/restaurant.jpg";
import cs from "./pictures/comingSoon.jpg";

import "./Projects.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const projects = [
  {
    id: 0,
    name: "Seneca Music",
    url: "https://seneca-music-eight.vercel.app",
    image: music,
    info: "The App is created with Angular helps browse through Spotify's newly released music, save favorite songs and listen to short cut outs. All that on your own private account.",
    alt: "Seneca Music Landing Page Pic",
    extraInfo: "",
  },
  {
    id: 1,
    name: "New York Restaurants",
    url: "https://my-app-inky.vercel.app",
    image: restaurant,
    info: "The App is created with React Native and it goes through a set of database where restaurants are stored. When restaurant is clicked you can see the name, type, grade and address of a restaurant.",
    alt: "New York Restaurants Landing Page Pic",
    extraInfo: "",
  },
  {
    id: 2,
    name: "Coming Soon...",
    url: "",
    image: cs,
    info: "The app is under construction.",
    alt: "",
    extraInfo: "",
  },
  {
    id: 3,
    name: "Coming Soon...",
    url: "",
    image: cs,
    info: "The app is under construction.",
    alt: "",
    extraInfo: "",
  },
  {
    id: 4,
    name: "Coming Soon...",
    url: "",
    image: cs,
    info: "The app is under construction.",
    alt: "",
    extraInfo: "",
  },
  {
    id: 5,
    name: "Coming Soon...",
    url: "",
    image: cs,
    info: "The app is under construction.",
    alt: "",
    extraInfo: "",
  },
];

export default function Projects(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container maxWidth="xll">
      <Box
        container
        className="ProjectsWrapper"
        sx={{
          mb: "32px",
          color: "white",
        }}
      >
        <Box sx={{ fontStyle: "oblique", mb: "20px" }}>
          <ThemeProvider theme={theme}>
            <Typography
              sx={{ fontFamily: "Monospace", cursor: "default" }}
              color="inherit"
              variant="h1"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              >
                Projects
              </div>
            </Typography>
            <Typography
              sx={{ fontFamily: "Monospace", cursor: "default" }}
              color="inherit"
              variant="h2"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-anchor-placement="center-bottom"
              >
                This page is for all the projects that were made using Angular,
                React or Other.
              </div>
            </Typography>
          </ThemeProvider>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(projects.length)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card>
                <CardActionArea
                  className="card-ac-area"
                  href={projects[index].url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CardMedia
                    className="card-image"
                    component="img"
                    image={projects[index].image}
                    alt={projects[index].alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {projects[index].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {projects[index].info}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions key={index}>
                  {projects[index].extraInfo ? <PopDialog /> : <AlertDrop />}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
