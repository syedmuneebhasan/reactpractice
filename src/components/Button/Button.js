import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "beige",
  },
});

export const CustomButton = (props) => {
  const styles = useStyles();
  return (
    <div>
      {/* <button className="btn" onClick={props.incrementCounter}>
        {props.title}
      </button> */}
      <Button
        variant="contained"
        size="small"
        className={styles.btn}
        onClick={props.incrementCounter}
      >
        {props.title}
      </Button>
    </div>
  );
};
