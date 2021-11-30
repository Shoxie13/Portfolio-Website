import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "../../utils/configParticles";

import "./ParticlesComponent.css";

export default function ParticlesComponent() {
  return (
    <div>
      <Particles
        className="ParticlesWrapper"
        params={particlesConfig}
      ></Particles>
    </div>
  );
}
