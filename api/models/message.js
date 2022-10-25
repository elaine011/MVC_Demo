const messages = [
  {
    id: 1,
    message: "message1",
    timestamp: "2022-10-25 15:45:56",
  },
  {
    id: 2,
    message: "message2",
    timestamp: "2022-10-25 15:53:12",
  },
];

const messageModel = {
  getAll: () => {
    return messages;
  },

  get: (id) => {
    return messages[id];
  },
};

module.exports = messageModel;
