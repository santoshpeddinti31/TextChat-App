import React from "react";
import image from "../assests/telegram.jpg";
import classes from "./Image.module.css";
const Image = () => {
  return (
    <div className={classes.gallery}>
      <img src={image} alt="" />
    </div>
  );
};
export default Image;
