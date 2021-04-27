import { useState } from "react";

import { siteLogo, homeBlog, homeDirectory, homeDonor } from "../../assets";
import "./Home.css";

const Home = () => {
  const slides = [
    <img src={homeBlog} alt="Blog" />,
    <img src={homeDirectory} alt="Blog" />,
    <img src={homeDonor} alt="Blog" />,
  ];
  const [slideNum, setSlideNum] = useState(0); //For keeping tab on which slide we are currently on

  const decrementSlide = () => {
    setSlideNum((value) => {
      return (slides.length + value - 1) % slides.length;
    });
  };

  const incrementSlide = () => {
    setSlideNum((value) => {
      return (value + 1) % slides.length;
    });
  };

  return (
    <div className="home-container">
      <div className="home-art">
        <img src={siteLogo} alt="Art" />
      </div>

      <div className="home-slideshow-container">
        <div className="home-slides">{slides[Math.abs(slideNum)]}</div>

        <span className="home-prev" onClick={decrementSlide}>
          <ion-icon name="chevron-back-circle-outline"></ion-icon>
        </span>
        <span className="home-next" onClick={incrementSlide}>
          <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Home;
