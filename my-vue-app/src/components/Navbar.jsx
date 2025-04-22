// import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartFlatbed, FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="links">
        <div className="logo">
          <h2>EShoping</h2>
        </div>
        <Link to="/Store">Store</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/AddProduct">Cart</Link>
        <Link to="/AddProduct">
          <FaUser className="icon" />
        </Link>
        <div className="cart_position">
          <Link to="/AddProduct">
            <FaCartShopping className="icon" />
            <span className="cart">0</span>
          </Link>
        </div>
        <Link to="/Search">
          <FaSearch className="icon" />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
