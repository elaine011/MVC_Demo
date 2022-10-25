import express from "express";
import {
  addNewMessage,
  getAllMessages,
  getMessageByID,
  updateMessageByID,
  deleteMessageByID,
} from "./controllers/studentController";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ExpressDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/message")
  .get((req, res, next) => {
    console.log(`Request from : ${req.originalUrl}`);
    console.log(`Request type : ${req.method}`);
    next();
  }, getAllMessages)
  .post(addNewMessage);

app
  .route("/message/:messageID")
  .get(getMessageByID)
  .put(updateMessageByID)
  .delete(deleteMessageByID);

app.listen(port, () => {
  console.log(`Application is listening on port: ${port}`);
});
