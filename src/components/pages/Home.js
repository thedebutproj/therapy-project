import { useState } from "react";

import { siteLogo, homeBlog, homeDirectory, homeDonor } from "../../assets";
import "./Home.css";

const Home = () => {
  //Content for the carousel
  const slides = [
    [
      <img className="dir-img" src={homeDirectory} alt="Blog" />,
      <>
        <h1 className="dir-h1">The Directory</h1>
        <p className="dir-p">
          Find the right therapist, counsellor, or psychologists for you. Visit
          our directory of verified mental health professionals and use our
          filters to create your shortlist!
        </p>
      </>,
      <button className="dir-btn">VISIT</button>,
    ],

    [
      <img className="blog-img" src={homeBlog} alt="Blog" />,
      <>
        <h1 className="blog-h1">FEATURED BLOG</h1>
        <p className="blog-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          tincidunt odio
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          
        </p>
      </>,
      <>
        <button className="blog-btn">VISIT</button>
      </>,
    ],

    [
      <img className="donor-img" src={homeDonor} alt="Blog" />,
      <>
        <h1 className="donor-h1">DONOR/DONEE</h1>
        <p className="donor-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          tincidunt odio
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          
        </p>
      </>,
      <>
        <button className="donor-btn">VISIT</button>
      </>,
    ],
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
        <div className="home-slides">{slides[Math.abs(slideNum)][0]}</div>

        <div className="home-slides-content">
          <div className="home-slides-text">
            {slides[Math.abs(slideNum)][1]}
          </div>
          <div className="home-slides-button">
            {slides[Math.abs(slideNum)][2]}
          </div>
        </div>

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
