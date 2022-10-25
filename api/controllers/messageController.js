import mongoose, { mongo } from "mongoose";
import { messageSchema } from "../models/message";

const Message = mongoose.model("Message", messageSchema);

export const addNewMessage = (req, res) => {
  let newMessage = new Message(req.body);
  newMessage.save((err, answer) => {
    if (err) {
      res.send(err);
    } else {
      res.send(answer);
    }
  });
};

export const getAllMessages = (req, res) => {
  Message.find({}, (err, answer) => {
    if (err) {
      res.send(err);
    } else {
      res.send(answer);
    }
  });
};

export const getMessageByID = (req, res) => {
  Message.find({ _id: req.params.messageID }, (err, answer) => {
    if (err) {
      res.send(err);
    } else {
      res.send(answer);
    }
  });
};

export const updateMessageByID = (req, res) => {
  Message.findOneAndUpdate(
    { _id: req.params.messageID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      } else {
        res.send(contact);
      }
    }
  );
};

export const deleteMessageByID = (req, res) => {
  Message.remove({ _id: req.params.messageID }, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Successfully deleted student from records" });
    }
  });
};
