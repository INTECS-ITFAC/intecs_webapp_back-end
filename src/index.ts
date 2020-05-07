import express from "express";
import { PORT } from "./config/constants";
import { userRouter, eventRouter } from "./routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on  port ${PORT}`);
});
