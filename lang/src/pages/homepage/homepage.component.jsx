import React from 'react';

import Introduction from '../../components/introduction/introduction.component';

import './homepage.styles.scss';
import '../../styles/colors.css';

const HomePage = () => (
  <div className='homepage'>
    <Introduction />
  </div>
);

export default HomePage;