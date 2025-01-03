import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>Logo</h1>
      <div className="menu">
        <p onClick={() => navigate("/muneeb")}>About</p>
        <p onClick={() => navigate("/contact-us")}>Contact Us</p>
      </div>
    </header>
  );
};
