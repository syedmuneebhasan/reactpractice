import React from "react";
import "./style.css";

export const Footer = ({ native_place }) => {
  return (
    <footer className="footer">
      <p>Email: test@gmail.com</p>
      <p>Contact No.: 99999XXXXX</p>
      <p>Copyright &copy; 2024 @ {native_place}</p>
    </footer>
  );
};
