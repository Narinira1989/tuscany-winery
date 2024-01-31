import { Link } from "react-router-dom";
import video from "./pictures/grapes.mp4";
import WineryDescription from "./WineryDescription";
import Slider from "./Slider";
import { useEffect, useState } from "react";

const Home = ({ menuOpen }) => {
  
  const [titleText, setTitleText] = useState("");
  const title =
    "Tuscany Winery inviting you into a world of wines and authentic craftsmanship.";
  let index = 0;
  

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index <= title.length) {
        setTitleText(title.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [index]);

  if (menuOpen) {
    return null;
  }

  return (
    <div>
      <section className="mainVideoPage">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="title-container">
          <h1 className="title">
            {titleText}
          </h1>
          <Link className="shopBtn" to="/shop">
            SHOP ALL WİNES
          </Link>
        </div>
      </section>

      <section className="wineryDescription">
        <WineryDescription />
      </section>

      <section className="newWines">
        <h3 className="newWinesTitle">Meet our new products</h3>
        <Slider />
      </section>
    </div>
  );
};

export default Home;


