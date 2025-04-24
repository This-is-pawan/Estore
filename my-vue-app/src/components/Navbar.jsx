import React, { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.counter.cart);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
       
        const parsed = JSON.parse(user);
        setUsername(parsed.Username || parsed.username || "");
      } catch (error) {
        console.log(error);
        
        setUsername(user);
      }
    }
  }, []);

  return (
    <div>
      <nav className="links">
        <div className="logo">
          <h2>EShoping</h2>
        </div>

        <Link to="/Store">Store</Link>
        <Link to="/Products">Products</Link>
        <Link to="/posting/">Post</Link>
        <Link to="/AddProduct">Cart</Link>

        <Link to="/login" className="user-link">
          <span className="username">{username.slice(0, 1)}</span>
          <FaUser className="icon" />
        </Link>

        <div className="cart_position">
          <Link to="/AddProduct">
            <FaCartShopping className="icon" />
            <span className="cart">{cart}</span>
          </Link>
        </div>

        <Link to="/products">
          <FaSearch className="icon" />
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
