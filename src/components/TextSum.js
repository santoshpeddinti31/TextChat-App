import React from "react";
import classes from "./TextSum.module.css";
import image from "../assests/telegram.jpg";
const TextInfo = () => {
  return (
    <div className={classes.summary}>
      <h3>
        TextChat
        <span>
          <img src={image} alt="" />
        </span>
        &nbsp; App.
      </h3>
      <p>write your comment here...💡</p>
    </div>
  );
};
export default TextInfo;
