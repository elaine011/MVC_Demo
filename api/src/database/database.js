import mongoose from "mongoose";

const DB_CONNECT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const Database = {
  connect: () => {
    mongoose
      .connect(
        `mongodb+srv://Xie:FJSGFR7lkW7FOqVq@mvctest.4929gaa.mongodb.net/?retryWrites=true&w=majority`,
        DB_CONNECT_OPTIONS
      )
      .then(() => console.log("Database is connected."))
      .catch((err) => console.log(err));
  },
};
