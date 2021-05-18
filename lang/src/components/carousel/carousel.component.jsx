import React from 'react';
import './carousel.styles.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';

import firstGame from '../../assets/gamesThumbnail/firstGame.png';
import secondGame from '../../assets/gamesThumbnail/secondGame.png';
import thirdGame from '../../assets/gamesThumbnail/thirdGame.png';
import fourthGame from '../../assets/gamesThumbnail/fourthGame.png';

import Slider from 'react-slick';

export default function App() {
  const games = [
    { gameName: 'firstGame', gameSrc: firstGame },
    { gameName: 'secondGame', gameSrc: secondGame },
    { gameName: 'thirdGame', gameSrc: thirdGame },
    { gameName: 'fourthGame', gameSrc: fourthGame },
    { gameName: 'fourthGame', gameSrc: fourthGame },
  ];
  // const renderSlides = () =>
  //   [1, 2, 3, 4, 5].map((num) => (
  //     <div key={num} className="slide">
  //       <div key={num}>Slide {num}</div>
  //     </div>
  //   ));

  const renderSlides = () =>
    games.map((game, num) => (
      <div>
        <div className="gameSlide">
          <img src={game.gameSrc} alt={num} key={num} className="thumbnail" />
          <h3 className="game-name">{game.gameName}</h3>
        </div>
      </div>
    ));

  return (
    <div>
      <Slider
        nextArrow={<RightArrow className="arrow" />}
        prevArrow={<LeftArrow className="arrow" />}
        infinite={true}
        dots={false}
        // centerPadding={35.56}
        centerPadding={50}
        className={'carousel'}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
