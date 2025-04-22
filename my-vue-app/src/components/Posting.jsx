import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Posting = () => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [hd, setHD] = useState();
  const handlePost = async () => {
    const responsePosting = await axios.post(
      `http://localhost:4000/posting`,

      {
        product: product,
        price: price,
        size: size,
        Hd: hd,
        Qulity:'sorry'
      },
      {
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Product posted:", responsePosting.data);
  };

  return (
    <div className="Posting">
      <h1>POST</h1>
      <div className="post_box">
       <label htmlFor="product">product</label>
        <input
          type="text"
          className="post"
          value={product}
          onChange={(e) => {
           setProduct(e.target.value);
          }}
        />

<label htmlFor="price">price</label>
        <input
          type="text"
          className="post"
          value={price}
          onChange={(e) => {
           setPrice(e.target.value);
          }}
        />

        <label htmlFor="size">size</label>
        <input
          type="text"
          className="post"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />

        <label htmlFor="hd">HD</label>
        <input
          type="text"
          className="post"
          value={hd}
          onChange={(e) => {
            setHD(e.target.value);
          }}
        />
      </div>

      <br />
      <Link
        to="/products"
        style={{
          color: "blue",
          textTransform: "capitalize",
          fontFamily: "monospace",
          fontSize: "0.8rem",
        }}
      >
        ⬅️ Back to product page
      </Link>
      <br />
      <br />
      <button
        className="btn"
        style={{
          color: "white",
          textTransform: "capitalize",
          fontFamily: "monospace",
          fontSize: "1.2rem",
        }}
        onClick={handlePost}
        disabled={!product || !price || !size || !hd}>
        new product
      </button>
    </div>
  );
};

export default Posting;
