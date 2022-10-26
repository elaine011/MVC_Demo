import React from "react";

function MessageData() {
  let Message;

  fetch("http://localhost:3004/messages")
    .then((res) => {
      res.json().then((text) => {
        console.log(text);
        return (Message = { MessageDate: text });
      });
    })
    .catch((e) => {
      console.log(e);
    });

  if (Message.length === 0) return <div>還沒有Message哦</div>;

  function Data() {
    return Message.map((_item: any, index: number) => {
      return (
        <>
          <div>Message[index].is</div>
          <div>Message[index].message</div>
          <div>Message[index].timestamp</div>
        </>
      );
    });
  }

  return <div>{Data()}</div>;
}

export default MessageData;
