const messageModel = require("../models/message"); // 引入 model

const messageController = {
  getAll: (req, res) => {
    const messages = messageModel.getAll(); // 把 todos 用 getAll 拿出來
    res.render("messages", {
      messages,
    });
  },

  get: (req, res) => {
    const id = req.params.id;
    const message = messageModel.get(id);
    res.render("messages", {
      message,
    });
  },
};

module.exports = messageController;
