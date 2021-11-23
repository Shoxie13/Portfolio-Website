import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import PopDialog from "../../components/PopDialog/PopDialog";
import AlertDrop from "../../components/Alert/Alert";

import "./Projects.css";
import music from "./pictures/music.jpg";
import restaurant from "./pictures/restaurant.jpg";
import cs from "./pictures/comingSoon.jpg";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Projects() {
  const projects = [
    {
      name: "Seneca Music",
      url: "https://seneca-music-eight.vercel.app",
      image: music,
      info: "The App is created with Angular helps browse through Spotify's newly released music, save favorite songs and listen to short cut outs. All that on your own private account.",
      alt: "Seneca Music Landing Page Pic",
      extraInfo: "Seneca Music INFO",
    },
    {
      name: "New York Restaurants",
      url: "https://my-app-inky.vercel.app",
      image: restaurant,
      info: "The App is created with React Native and it goes through a set of database where restaurants are stored. When restaurant is clicked you can see the name, type, grade and address of a restaurant.",
      alt: "New York Restaurants Landing Page Pic",
      extraInfo: "New York Restaurants INFO",
    },
    {
      name: "Coming Soon...",
      url: "",
      image: cs,
      info: "The app is under construction.",
      alt: "",
      extraInfo: "",
    },
    {
      name: "Coming Soon...",
      url: "",
      image: cs,
      info: "The app is under construction.",
      alt: "",
      extraInfo: "",
    },
    {
      name: "Coming soon...",
      url: "",
      image: cs,
      info: "The app is under construction.",
      alt: "",
      extraInfo: "",
    },
    {
      name: "Coming soon...",
      url: "",
      image: cs,
      info: "The app is under construction.",
      alt: "",
      extraInfo: "",
    },
  ];

  return (
    <Container maxWidth="xll">
      <Box
        container
        sx={{
          width: "auto",
          marginBottom: "32px",
          color: "white",
        }}
      >
        <Box sx={{ fontStyle: "oblique", mt: 10, mb: "20px" }}>
          <ThemeProvider theme={theme}>
            <Typography
              sx={{ fontFamily: "Monospace", cursor: "default" }}
              color="inherit"
              variant="h1"
            >
              Projects
            </Typography>
            <Typography
              sx={{ fontFamily: "Monospace", cursor: "default" }}
              color="inherit"
              variant="h2"
            >
              This page is for all the projects that were made using Angular,
              React or Other.
            </Typography>
          </ThemeProvider>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 8 }}
        >
          {Array.from(Array(projects.length)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card>
                <CardActionArea
                  className="card"
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
