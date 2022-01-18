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
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { Zoom, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
import management from "./pictures/management.jpg";
import cs from "./pictures/comingSoon.jpg";

import "./Projects.css";

const MyFab = styled(Fab)({
  backgroundColor: "#7f47ff",
  color: "white",
  "&:hover": {
    backgroundColor: "#4f15d6",
  },
});

let theme = createTheme();
theme = responsiveFontSizes(theme);

const projects = [
  {
    id: 0,
    name: "Seneca Music",
    url: "https://seneca-music-eight.vercel.app",
    image: music,
    info: "The App is created with Angular, it helps browse through Spotify's newly released music, save favorite songs and listen to short cut outs. All that on your own private account.",
    alt: "Seneca Music Picture",
    extraInfo: "",
  },
  {
    id: 1,
    name: "NY Restaurants",
    url: "https://my-app-inky.vercel.app",
    image: restaurant,
    info: "The App is created with React Native, it helps browse through restaurants in New York. When restaurant is clicked you can see the name, type, grade and address of a restaurant.",
    alt: "New York Restaurants Picture",
    extraInfo: "",
  },
  {
    id: 2,
    name: "Management App",
    url: "https://nameless-stream-25703.herokuapp.com/",
    image: management,
    info: "This App gives you the opportunity to manage team of employees or just keep a personal record. You can create a FREE secure account that will give you access to all the features.",
    alt: "Management App Picture",
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

function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Projects(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Box
        container
        sx={{
          mb: "20px",
          color: "white",
        }}
      >
        <Box
          sx={{
            mb: "20px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              sx={{ fontFamily: "Ubuntu", cursor: "default" }}
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
              sx={{ fontFamily: "Ubuntu", cursor: "default" }}
              color="inherit"
              variant="h2"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-anchor-placement="center-bottom"
              >
                This page is for all the projects that I made using Angular,
                React or other.
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
            <Grid
              key={Math.floor(
                Math.random() * (9999 - 0.12312312341 + 1) + 0.12312312341
              )}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Card>
                <CardActionArea
                  href={projects[index].url}
                  rel="noopener noreferrer"
                  target="_blank"
                  sx={{
                    transition: "0.5s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <CardMedia
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
        <ScrollTop {...props}>
          <MyFab size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </MyFab>
        </ScrollTop>
      </Box>
    </Container>
  );
}
