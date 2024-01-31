import React from "react";
import { useSelector } from "react-redux";
import { getCartItemsCount } from "../../redux/cartSlice";

const Badge = () => {
  const count = useSelector(getCartItemsCount);
  return <div className="badge">{count}</div>;
};

export default Badge;
