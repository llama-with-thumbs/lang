import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import backClouds from '../../assets/backClouds.png';
import midClouds from '../../assets/midClouds.png';
import frontFigures from '../../assets/frontFigures.png';

import './cloud-img.styles.scss';

const CloudImg = () => (
  <ParallaxProvider>
    <div className="cloud-img-wrapper">
      <Parallax className="back-div" y={[-50, -99]} tagOuter="figure">
        <img
          className="back-clouds"
          src={backClouds}
          alt="back clouds"
          draggable="false"
        />
      </Parallax>
      <Parallax className="mid-div" y={[-30, -55]} tagOuter="figure">
        <img
          className="mid-clouds"
          src={midClouds}
          alt="middle clouds"
          draggable="false"
        />
      </Parallax>
      <Parallax className="front-div" y={[-10, -35]} tagOuter="figure">
        <img
          className="front-cloud"
          src={frontFigures}
          alt="front figures"
          draggable="false"
        />
      </Parallax>
    </div>
  </ParallaxProvider>
);

export default CloudImg;
