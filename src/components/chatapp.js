import React, { useState } from "react";
import Button from "./Button";
import classes from "./Chatapp.module.css";
import Image from "./Image";
import sendimage from "../assests/dana.png";
const Chatapp = (props) => {
  const [data, setData] = useState("");

  const formsubmitHandler = (event) => {
    event.preventDefault();
    if (data.trim().length > 0) {
      props.onAddUser(data);
    }
    setData("");
  };

  const messageInputHandler = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <main>
        <section>
          <div className={classes.container}>
            <header>
              TextChat
              <Image />
              <span></span>
            </header>
          </div>
          <div className={classes.inputmessage}>
            <form onSubmit={formsubmitHandler}>
              <input
                type="text"
                value={data}
                onChange={messageInputHandler}
                placeholder="message here..."
              />
              {
                <Button type="submit">
                  <img src={sendimage} alt="" className={classes.changer} />
                </Button>
              }
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Chatapp;
