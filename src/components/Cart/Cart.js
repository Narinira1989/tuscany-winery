import { useSelector } from "react-redux";
import {
  getCartItems,
  getTotalPrice,
  getCartItemsCount,
} from "../../redux/cartSlice";
import cartIcon from "../pictures/grocery-store.png";
import CartItem from "./CartItem";
import Badge from "./Badge";


const Cart = () => {
  const cartItemsCount = useSelector(getCartItemsCount);
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="cartStyle">
      <div style={{ position: "relative" }}>
        <img src={cartIcon} alt="cart" width="50px" />
        {cartItemsCount > 0 && <Badge />}
      </div>

      <p>
        <b>Total: ${totalPrice}</b>
      </p>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};

export default Cart;
