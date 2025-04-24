import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaShopify, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Update from "./Update";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/delete/${id}`);
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000");
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products">
      {loading ? (
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : products.length > 0 ? (
        products.map((item) => (
          <div key={item._id} className="users">
            <Update
              product={item.product}
              price={item.price}
              size={item.size}
              Hd={item.HD} 
              id={item._id}
            />

            <p style={{ color: "white", textDecoration: "underline" }}>
              Get Data
            </p>

            <div className="card productOne">
              <h3>{item.product}</h3>
            </div>
            <div className="card">Price: {item.price}</div>
            <div className="card">Size: {item.size}</div>
            <div className="card">Product ID: {item._id}</div>

            <div className="icons">
              <FaTrash
                className="trash"
                onClick={() => handleDelete(item._id)}
              />
              <Link to={`/posting/`}>
                <FaEdit className="edit" />
              </Link>
              <Link to={`/AddProduct`}>
                <FaShopify className="edit" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ color: "white" }}>No Products Found</h1>
      )}
    </div>
  );
};

export default Products;
