import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Update = ({ product, price, size, Hd, id }) => {
  const [productName, setProductName] = useState(product);
  const [productPrice, setProductPrice] = useState(price);
  const [productSize, setProductSize] = useState(size);
  const [productHd, setProductHd] = useState(Hd);
  const [message, setMessage] = useState(false);
  setTimeout(() => {
    setMessage(false)
  }, 2000);
  const handleUpdating = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:4000/update/${id}`,
        {
          product: productName,
          price: productPrice,
          size: productSize,
          hd: productHd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Item updated:", result.data);
      setMessage(!message);
    } catch (error) {
      console.error("Error updating item:", error);
      setMessage("Error while updating item.");
    }
  };

  return (
    <div className="updating_box">
      <input
        type="text"
        placeholder="Product"
        className="input_box"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        className="input_box"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Size"
        className="input_box"
        value={productSize}
        onChange={(e) => setProductSize(e.target.value)}
      />
      <input
        type="text"
        placeholder="HD"
        className="input_box"
        value={productHd}
        onChange={(e) => setProductHd(e.target.value)}
      />
      <br />
      <br />
      <button style={{ color: "white" }} onClick={handleUpdating}>
        Update the data
      </button>
      {message?<div className="message"><p> Updated successfully</p></div> : ''}

      
    </div>
  );
};

export default Update;
