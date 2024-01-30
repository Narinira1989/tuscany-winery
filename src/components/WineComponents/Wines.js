import { useSelector } from "react-redux";
import dataWines from "../../data/dataWines";
import Wine from "./Wine";
import { getSelectedCategory } from "../redux/winesSlice";

const Wines = () => {

    const selectedCategory = useSelector(getSelectedCategory);

  return (

      <div className="wine-position">
            {dataWines.filter(wine => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === wine.category;
            })
            .map((wine, index) => <Wine wine={wine} key={index} />)}
      </div>

  );
};

export default Wines;
