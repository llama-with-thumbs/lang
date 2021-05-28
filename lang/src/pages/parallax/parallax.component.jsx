import React from 'react';

import CloudImgTest from '../../components/cloud-img-test/cloud-img-test.component';
import Button from '../../components/button/button.component';
import Container from '@material-ui/core/Container';


import './parallax.styles.scss';
import '../../styles/colors.css';

const HomePage = () => (
  <Container maxWidth="false">
    <div className="parallax">
      <section className="introduction-wrapper">
        <section className="introduction">
          <div className="intro-info">
            <h1 className="h1">learn a new language in 30 days</h1>
            <p className="paragraph">
              With RS Lang you will be excited to keep learning new words. Just
              for you we keep track of your progress and visualize it in
              captivating charts that will boost your motivation!
            </p>
            <Button className="start-button light" variant="contained">
              Start Now
            </Button>
          </div>
          <CloudImgTest />
        </section>
      </section>
      <div className="wrapper"></div>
      <div className="wrapper"></div>
      <div className="wrapper"></div>
    </div>
  </Container>
);

export default HomePage;
