import React from "react";
import Particles from "react-particles-js";

import "./particles.component.css";

class ParticlesDraw extends React.Component {
  render() {
    return (
      <div calss="container__particles">
        <div className="particles__styles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 150,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#eae7dc",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#eae7dc",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 5,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 5,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#3b945e",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                  },
                },
              },

              retina_detect: true,
            }}
          />
        </div>
      </div>
    );
  }
}
export default ParticlesDraw;
