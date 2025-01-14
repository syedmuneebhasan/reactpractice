import React from "react";
import "./style.css";
import { CustomButton } from "../Button/Button";

export const Hero = () => {
  return (
    <div className="Hero">
      <h1>This is Hero Section</h1>
      <CustomButton title="Hero" />
    </div>
  );
};
