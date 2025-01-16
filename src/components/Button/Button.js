import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   btn: {
//     backgroundColor: "beige !importa",
//   },
// });
export const CustomButton = (props) => {
  // const styles = useStyles();
  return (
    <div>
      {/* <button className="btn" onClick={props.incrementCounter}>
        {props.title}
      </button> */}
      <Button
        variant="contained"
        size="small"
        className="btn"
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </div>
  );
};
