import React from "react";

import { Box } from "@mui/material";

import Particles from "react-particles-js";
import particlesConfig from "../../utils/configParticles";

import "./ParticlesComponent.css";

export default function ParticlesComponent() {
  return (
    <Box container className="ParticlesMainWrapper">
      <Particles
        width="100wh"
        height="100vh"
        params={particlesConfig}
      ></Particles>
    </Box>
  );
}
