import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  home_FullBGWithText,
  home_directory_MainIllustration,
  home_directory_LHSGraphic,
  home_blog_MainIllustration,
  home_blog_RHSGraphic,
  home_donor_MainIllustration,
  home_donor_LHSPuzzle,
  homepage_FullBG,
} from "../../assets";

// import "./Home.css";
import "./Home.css";

const Home = () => {
  //Content for the carousel
  const slides = [
    [
      "home-directory",
      <>
        <img src={home_directory_LHSGraphic} className="figure1" />
        <div className="home-slide-content pure-g">
          <div className="home-slide-left pure-u-1 pure-u-md-1-2">
            <h1 className="dir-h1">THE DIRECTORY</h1>
            <p className="dir-p">
              <b>
                {" "}
                Find the right therapist, counsellor, or psychologist for
                yourself. Visit our catalogue of mental health professionals and
                use our filters to create your shortlist!
              </b>
            </p>
            <button className="dir-btn">
              <Link to="/directory">VISIT</Link>
            </button>
          </div>
          <div className="home-slide-right pure-u-0 pure-u-md-1-2 home-slide-right-directory">
            <img src={home_directory_MainIllustration} className="pure-img" />
          </div>
        </div>
      </>,
    ],

    [
      "home-blog",
      <>
        <img src={home_blog_RHSGraphic} className="figure1" />
        <div className="home-slide-content pure-g">
          <div className="home-slide-left pure-u-1 pure-u-md-1-2">
            <h1 className="blog-h1">BLOG</h1>
            <p className="blog-p">
              <b>
                Go through our curation of articles pertaining to availing
                mental healthcare, making the most of your experience with your
                chose professional, and more.
              </b>
            </p>
            <button className="blog-btn">
              <Link to="/blog">VISIT</Link>
            </button>
          </div>
          <div className="home-slide-right pure-u-0 pure-u-md-1-2 home-slide-right-blog">
            <img src={home_blog_MainIllustration} className="pure-img" />
          </div>
        </div>
      </>,
    ],

    [
      "home-donor",
      <>
        <img src={home_donor_LHSPuzzle} className="figure1" />
        <div className="home-slide-content home-slide-content-donor pure-g">
          <div className="home-slide-left pure-u-1 pure-u-md-1-2">
            <h1 className="donor-h1">
              ASSIST<sup>BETA</sup>
            </h1>
            <p className="donor-p">
              <b>
                Find out more about how you can help us (or seek help from us)
                via our mission to help students/young-professionals avail
                mental healthcare.
              </b>
            </p>
            <button className="donor-btn">
              <Link to="/donor">VISIT</Link>
            </button>
          </div>
          <div className="home-slide-right pure-u-0 pure-u-md-1-2 home-slide-right-donor">
            <img src={home_donor_MainIllustration} className="pure-img" />
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

  useEffect(() => {
    // For automatic slide increment
    const interval = setInterval(incrementSlide, 10000000);

    // It ensures that as soon as component is unmounted interval is cleared
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-art">
        <img src={homepage_FullBG} alt="Art" className="pure-img" />
        <div className="home-art-text">
          eliminating the uncertainties from
          <br />
          your first visit to a mental health
          <br />
          professional
        </div>
      </div>

      <div
        className={"home-slideshow-container " + slides[Math.abs(slideNum)][0]}
      >
        {slides[Math.abs(slideNum)][1]}
        <span className="home-prev" onClick={decrementSlide}>
          <ion-icon name="chevron-back-circle-outline"></ion-icon>
        </span>
        <span className="home-next" onClick={incrementSlide}>
          <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </span>

        <ul className="home-carousel-dots-container">
          {slides.map((slide, index) => {
            return (
              <li onClick={() => setSlideNum(index)} key={index}>
                {Math.abs(slideNum) === index ? (
                  <ion-icon name="ellipse"></ion-icon>
                ) : (
                  <ion-icon name="ellipse-outline"></ion-icon>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
