import { useState } from "react";

import {
  siteLogo,
  homeBlog,
  homeDirectory,
  homeDonor,
  home_directory_MainIllustration,
  home_directory_LHSGraphic,
  home_blog_MainIllustration,
  home_donor_MainIllustration,
  home_donor_LHSPuzzle,
} from "../../assets";
import "./Home.css";

const Home = () => {
  //Content for the carousel
  const slides = [
    [
      "home-directory",
      <>
        <img src={home_directory_LHSGraphic} className="figure1" />
        <div className="home-slide-content">
          <div className="home-slide-left">
            <h1 className="dir-h1">THE DIRECTORY</h1>
            <p className="dir-p">
              Find the right therapist, counsellor, or psychologists for you.
              Visit our directory of verified mental health professionals and
              use our filters to create your shortlist!
            </p>
            <button className="dir-btn">VISIT</button>
          </div>
          <div className="home-slide-right home-slide-right-directory">
            <img src={home_directory_MainIllustration} />
          </div>
        </div>
      </>,
    ],

    [
      "home-blog",
      <>
        <div className="home-slide-content">
          <div className="home-slide-left">
            <h1 className="blog-h1">FEATURED BLOG</h1>
            <p className="blog-p">
              For IIT Roorkee only
              <br></br>
              Don't know if therapy is for you? Try it out for free. Reach out
              to our partner donors and blah blah blah.
            </p>
            <button className="blog-btn">VISIT</button>
          </div>
          <div className="home-slide-right">
            <img src={home_blog_MainIllustration} />
          </div>
        </div>
      </>,
    ],

    [
      "home-donor",
      <>
        <img src={home_donor_LHSPuzzle} className="figure1" />
        <div className="home-slide-content">
          <div className="home-slide-left">
            <h1 className="donor-h1">DONOR/DONEE</h1>
            <p className="donor-p">
              For IIT Roorkee only
              <br></br>
              Don't know if therapy is for you? Try it out for free. Reach out
              to our partner donors and blah blah blah.
            </p>
            <button className="donor-btn">VISIT</button>
          </div>
          <div className="home-slide-right home-slide-right-donor">
            <img src={home_donor_MainIllustration} />
          </div>
        </div>
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

      <div
        className={"home-slideshow-container " + slides[Math.abs(slideNum)][0]}
      >
        {/* <div className="home-slides">{slides[Math.abs(slideNum)][0]}</div>

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
        </span> */}
        {slides[Math.abs(slideNum)][1]}
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
