import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const cart = isInCart ? "in-cart" : ""
  const toggleCart = () => {
    setIsInCart(!isInCart); 
  };

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
