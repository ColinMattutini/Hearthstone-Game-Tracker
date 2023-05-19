import React from "react";
import portrait1 from "../../assets/Portrait1.png";
import classes from "./GameForm.module.css";

const GameForm = () => {
  return (
    <div>
      <form>
        <h1>Form</h1>
        <button className={classes.button}>
          {/* <img src={portrait1} width={225} height={250} /> */}
        </button>
      </form>
    </div>
  );
};

export default GameForm;
