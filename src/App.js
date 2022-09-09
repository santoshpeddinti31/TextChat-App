import React, { Fragment, useState } from "react";
import Chatapp from "./components/chatapp";
import UserMessage from "./components/Usermessage";
import TextInfo from "./components/TextSum";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addHandler = (usertext) => {
    setUserList((previousmessage) => {
      return [
        ...previousmessage,
        { message: usertext, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <Chatapp onAddUser={addHandler} />
      <UserMessage chat={userList} />
      <TextInfo />
    </Fragment>
  );
};
export default App;
