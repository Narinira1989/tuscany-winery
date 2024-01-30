import winery from "./pictures/winery.jpg";
import wineryWoman from "./pictures/womanGrapes.jpg";
import wineryWines from "./pictures/winery-wines.jpg";

function WineryDescription() {
  return (
    <div>
      <div className="description-container">
        <div>
          <h3 className="newWinesTitle">Welcome to Tuscany Winery</h3>
          <p className="description-text">
            Tuscany Winery is a place where the harmony of nature and the art of
            winemaking create a unique experience for our guests. Our winery is
            nestled in the picturesque landscapes of Tuscany, surrounded by
            green hills and vineyards.
          </p>
        </div>
        <img className="wineryPicture" src={winery} alt="Winery" width="50%" />
      </div>

      <div className="description-container">
        <img
          className="wineryPicture"
          src={wineryWoman}
          alt="Winery"
          width="50%"
        />

        <div>
          <h3 className="newWinesTitle">A Place of Strength</h3>
          <p className="description-text">
            Tuscany Winery is more than a winery; it's a meeting point for wine
            enthusiasts and nature lovers. Here, you'll find solitude among the
            vineyards, luxurious spaces for events, and a friendly staff ready
            to share the love for wine. Join us and dive into the world of
            Tuscany Winery—a realm of inspiration, flavor, and genuine Italian
            hospitality. We look forward to sharing our unique winemaking
            experience with you!
          </p>
        </div>
      </div>

      <div className="description-container">
        <div>
          <h3 className="newWinesTitle">Winemaking Experience</h3>
          <p className="description-text">
            We invite you on a fascinating journey through the world of
            winemaking. Our tours allow you to immerse yourself in the
            winemaking process, from grape harvesting to bottling. You'll not
            only savor refined wines but also experience the atmosphere of an
            ancient Italian estate.
          </p>
        </div>
        <img
          className="wineryPicture"
          src={wineryWines}
          alt="Winery"
          width="50%"
        />
      </div>
    </div>
  );
}

export default WineryDescription;
