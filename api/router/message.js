import React, { useRef } from "react";
import moment from "moment";

function Message() {
  const messageText = useRef("");

  function setData() {
    fetch("http://localhost:3004/messages", {
      method: "POST",
      body: JSON.stringify({
        message: messageText.current.value,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("已送出");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div>留言板</div>
      <textarea type="text" ref={messageText}></textarea>
      <button
        onClick={() => {
          setData();
        }}
      >
        送出
      </button>
    </div>
  );
}

export default Message;
