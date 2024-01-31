import { configureStore } from "@reduxjs/toolkit";
import wines from "./winesSlice";
import cart from "./cartSlice";

export const store = configureStore({
  reducer: {
    wines: wines,
    cart: cart,
  },
});
