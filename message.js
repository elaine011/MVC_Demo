import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const message = new Schema({
  owner: {
    type: String,
    required: "Name",
  },
  message: {
    type: String,
    required: "Message",
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});
