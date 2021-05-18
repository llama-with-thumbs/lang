import React from 'react';

import Introduction from '../../components/introduction/introduction.component';
import Carousel from '../../components/carousel/carousel.component';

import './homepage.styles.scss';
import '../../styles/colors.css';

const HomePage = () => (
  <div className="homepage">
    <section className="introduction-wrapper">
      <Introduction />
    </section>
    <section className="carousel-wrapper">
      <Carousel />
    </section>
  </div>
);

export default HomePage;
