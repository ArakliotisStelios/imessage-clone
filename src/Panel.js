import "./App.css";
import React from "react";

const obj = { text: " dfdfdfdfdfdfddf test", user: "me" };
const obj1 = { text: " message1 test", user: "them" };
const obj2 = { text: " message2 test", user: "me" };
const obj3 = { text: " message3 test", user: "them" };

function Panel() {
  const [arrayMessages, setArrayMessages] = React.useState([
    obj,
    obj1,
    obj2,
    obj1,
    obj1,
    obj1,
    obj3,
    obj2,
    obj3,
  ]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let temp = { text: event.target.value, user: "me" };
      setArrayMessages((arrayMessages) => [...arrayMessages, temp]);
      event.target.value = "";
    }
  };

  const alignMessage = (message) => {
    if (message.user === "me") {
      return (
        <p key={crypto.randomUUID()} className="from-me">
          {message.text}
        </p>
      );
    } else
      return (
        <p key={crypto.randomUUID()} className="from-them">
          {message.text}
        </p>
      );
  };

  return (
    <div className="Panel">
      {arrayMessages.map((item) => {
        return alignMessage(item);
      })}
      <input
        className="Input"
        placeholder="your message"
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default Panel;
