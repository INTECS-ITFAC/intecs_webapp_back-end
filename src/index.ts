import express from "express";
import { PORT } from "./config/constants";
import { userRouter, eventRouter } from "./routes";

var cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
app.use("/users", userRouter);
app.use("/events", eventRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on  port ${PORT}`);
});

module.exports = app;
