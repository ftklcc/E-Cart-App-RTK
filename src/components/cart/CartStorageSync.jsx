import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartStorageSync = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    let timer = setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }, 300);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return null;
};

export default CartStorageSync;
