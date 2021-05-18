import React from 'react';

import CloudImg from '../cloud-img/cloud-img.component';
import Button from '../button/button.component';

// import Button from '@material-ui/core/Button';

import './introduction.styles.scss';

const Introduction = () => (
  <section className="introduction">
    <div className="intro-info">
      <h1 className="h1">learn a new language in 30 days</h1>
      <p className="paragraph">
        With RS Lang you will be excited to keep learning new words. Just for
        you we keep track of your progress and visualize it in captivating
        charts that will boost your motivation!
      </p>
      <Button className="start-button light" variant="contained">
        Start Now
      </Button>
    </div>
    <CloudImg />
  </section>
);

export default Introduction;
