import { useDispatch } from "react-redux";
import dataWines from "../../data/dataWines";
import trash from "../pictures/bin.png";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({ cartItem }) => {
  const wines = dataWines.find((item) => item.id === cartItem.wineId);
  const dispatch = useDispatch();

  return (
    <div className="cartItems">
      <img
        src={wines.img}
        alt={wines.name}
        style={{ width: "50px", height: "50px" }}
      />
      <p>
        <b>{wines.name}</b>
      </p>
      <p>{cartItem.quantity} piece(s)</p>
      <p>
        <b>Price: ${wines.price * cartItem.quantity}</b>{" "}
      </p>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img src={trash} alt="cart" width="20px" />
      </span>
    </div>
  );
};

export default CartItem;
