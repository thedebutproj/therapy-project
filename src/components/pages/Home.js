import { useState, useRef, useEffect } from "react";

import { siteLogo, homeBlog, homeDirectory, homeDonor } from "../../assets";
import "./Home.css";

const Home = () => {
  const numOfSlides = useRef(0); //For knowing how many slides are used
  const [slideNum, setSlideNum] = useState(0); //For keeping tab on which slide we are currently on

  const decrementSlide = () => {
    setSlideNum((value) => {
      return (value - 1) % numOfSlides;
    });
  };

  const incrementSlide = () => {
    setSlideNum((value) => {
      return (value + 1) % numOfSlides;
    });
    console.log(slideNum);
  };

  useEffect(() => {
    numOfSlides.current = document.getElementsByClassName("home-slides").length;
    console.log(typeof slideNum);
  });

  //   useEffect(() => {
  //     //console.log(numOfSlides);
  //   }, [slideNum]);

  return (
    <div className="home-container">
      <div className="home-art">
        <img src={siteLogo} alt="Art" />
      </div>

      <div className="home-slideshow-container">
        <div className="home-slides">
          <img src={homeBlog} alt="Blog" />
        </div>

        <div className="home-slides">
          <img src={homeDirectory} alt="Directory" />
        </div>

        <div className="home-slides">
          <img src={homeDonor} alt="Donors" />
        </div>

        <span className="home-prev" onClick={decrementSlide}>
          &#10094;
        </span>
        <span className="home-next" onClick={incrementSlide}>
          &#10095;
        </span>
      </div>
    </div>
  );
};

export default Home;
