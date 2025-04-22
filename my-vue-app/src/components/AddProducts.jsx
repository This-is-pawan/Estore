// AddProducts.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./ReduxTool/Reducer";

const AddProducts = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.counter.cart); 

  

  return (
    <div className="carts">
      <h1>Cart</h1>
      <p>Items in cart: {cart}</p>

      <div className="cart-controls">
        <button onClick={() => dispatch(increment())} className="cart_btn">➕ Add</button>
        <button onClick={() => dispatch(decrement())} className="cart_btn">➖ Remove</button>
      </div>

      <button className="btn cart_btn">Add to Cart</button>
      <br />
      <Link to="/products">Go to Product Page</Link>
    </div>
  );
};

export default AddProducts;
