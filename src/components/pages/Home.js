import { useState } from "react";

import { siteLogo, homeBlog, homeDirectory, homeDonor } from "../../assets";
import "./Home.css";

const Home = () => {
  //Content for the carousel
  const slides = [
    [
      <img src={homeDirectory} alt="Blog" />,
      <>
        <h1>The Directory</h1>
        <p>
          Find the right therapist, counsellor, or psychologists for you. Visit
          our directory of verified mental health professionals and use our
          filters to create your shortlist!
        </p>
      </>,
      <button>Go to the directory</button>,
    ],

    [
      <img src={homeBlog} alt="Blog" />,
      <>
        <h1>Featured Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          tincidunt odio, ac ultrices nisl. Sed hendrerit posuere ante luctus
          scelerisque.
        </p>
      </>,
      <>
        <button>Hello</button>
        <button>Hello</button>
      </>,
    ],

    [
      <img src={homeDonor} alt="Blog" />,
      <>
        <h1>Connect with potential donors</h1>
        <p>(Beta)</p>
      </>,
      <>
        <button>Hello</button>
        <button>Hello</button>
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
