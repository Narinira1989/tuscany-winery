import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const Wine = ({ wine}) => {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ wine, quantity }));
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="wineCard">
      <img
        src={wine.img}
        alt={wine.name}
        width="300px"
        className="wines-picture"
      />
      <h4 className="card-title">{wine.name}</h4>
      <p className="price">${wine.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart} className="btnAdd">
        Add to cart
      </button>
      {showAlert && <Alert variant="success">Added to cart!</Alert>}
    </div>
  );
};

export default Wine;
