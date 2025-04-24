// AddProducts.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./ReduxTool/Reducer";

const AddProducts = () => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.counter.cart); 

  

  return (
    <div className="carts">
      <h1>Cart</h1>
      <br />
      <br />
     <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat a delectus quae nobis doloribus quaerat distinctio! Illum voluptatem cum rem quo corporis. Eos, dolorem incidunt cum sit numquam omnis.</p> 
      {/* <p>Items in cart: {cart}</p> */}

      <div className="cart-controls">
        <button  style={{color:'white'} } onClick={() => dispatch(decrement())} className="btn_Cart">Remove to Cart</button>
      <button  style={{color:'white'} }className="btn_Cart " onClick={() => dispatch(increment())}  >Add to Cart</button>
      </div>
      <br />
      <Link to="/products">Go to Product Page</Link>
    </div>
  );
};

export default AddProducts;
