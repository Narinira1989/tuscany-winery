import React from "react";
import { useState, useEffect } from "react";

import bottle1 from "./pictures/tuscany1.png";
import bottle2 from "./pictures/tuscany2.png";
import bottle3 from "./pictures/tuscany3.png";

const About = ({ menuOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (menuOpen) {
    return null;
  }

  return (
    <section className="about">
      <div
        className="grapeImageContainer"
        style={{ backgroundPositionY: `${-scrollPosition * 0.5}px` }}
      >
        <h2 className="titleStyle">
          Wine is the only artwork you can drink -{" "}
        </h2>
        <h2 className="titleStyle">Luis Fernando Olaverri</h2>
      </div>

      <div className="about-container">
        <h3 className="newWinesTitle">Welcome to Tuscany Winery</h3>
        <div className="description-container container-about">
          <p className="description-text">
            Tuscany Winery is a winery founded in 1973 in the heart of Tuscany,
            in the renowned winemaking region of Chianti. Since then, we have
            become a symbol of tradition and quality, striving to offer our
            guests the finest wines you can find in this area.
          </p>
          <p className="description-text">
            Our roots date back centuries and are firmly entrenched in the
            history of this magnificent region. As we strive to preserve and
            pass on traditions, our winemakers combine ancient methods and
            cutting-edge technologies to create wines of the highest quality.
          </p>
        </div>

        <div className="images-container">
          <div className="bigImg">
            <img src={bottle3} alt="bottle" className="pictureBig" />

            <div className="unique-wines">
              <h3 className="newWinesTitle">Unique Wines</h3>
              <p className="description-text">
                We take pride in the diversity of our wines, which reflect the
                richness and diversity of local grapes. Our famous red wines,
                including the iconic Chianti, possess exquisite taste and aroma
                that can only be found in this region.
              </p>
            </div>
          </div>

          <div className="littleImgContainer">
            <img
              src={bottle1}
              alt="bottle"
              width="238px"
              className="pictureLittle"
            />
            <img
              src={bottle2}
              alt="bottle"
              width="238px"
              className="pictureLittle"
            />

            <div className="winemaking">
              <h3 className="newWinesTitle">The Art of Winemaking</h3>
              <p className="description-text">
                Winemaking for us is not just a job but a true art that we
                create with love and passion. We invite you to discover the
                world of winemaking and savor every sip of our unique wines that
                reflect the spirit and culture of this beautiful region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
