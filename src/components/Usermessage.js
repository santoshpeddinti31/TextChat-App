import React from "react";

import classes from "./Usermessage.module.css";

const UserMessage = (props) => {
  return (
    <div className={classes.message}>
      <ul>
        {props.chat.map((text) => (
          <div className={classes.san}>
            <li key={text.id}>{text.message}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default UserMessage;
