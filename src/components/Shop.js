import Cart from "./Cart/Cart";
import AllCategories from "./Filter/AllCategories";
import Wines from "./WineComponents/Wines";

const Shop = ({ menuOpen }) => {
  
  if (menuOpen) {
    return null;
  }

  return (
    <section className="wineSection">
      <div>
        <AllCategories />
      </div>

      <div className="cartAndWines">
        <div className="wines">
          <Wines />
        </div>

        <div className="cartPosition">
          <Cart />
        </div>
      </div>
    </section>
  );
};

export default Shop;
