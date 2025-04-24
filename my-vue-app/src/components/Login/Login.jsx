import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user && password) {
      
      const userInfo = {
        username: user,
        password: password, 
      };

      localStorage.setItem("user", JSON.stringify(userInfo));


      navigate("/");
    } else {
      alert("Please fill in both username and password.");
    }
  };

  return (
    <div className="Login">
      <div className="login">
        <form onSubmit={handleLogin}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="name_input login_input"
            placeholder="User Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="Password_input login_input"
            placeholder="User Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn" style={{ color: "white" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
