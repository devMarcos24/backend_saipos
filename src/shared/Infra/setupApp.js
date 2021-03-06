import Express from "express";
import cors from "cors";
import path from "path";

import morgan from "morgan";

import ModelTodo from "../Models/todos";

import * as ctrs from "./controller";
import * as rtrs from "./routes";

const setupApp = async () => {
  const TodoController = new ctrs.TodoController(ModelTodo);
  const EmailController = new ctrs.EmailController();

  const rootRouter = Express.Router();

  rootRouter.use("/todo", rtrs.RouterTodo.configure(TodoController));
  rootRouter.use("/email", rtrs.RouterEmail.configure(EmailController));

  const app = Express();

  app.use([
    cors(),
    Express.json({ limit: "10mb" }),
    Express.urlencoded({ extended: true }),
  ]);

  app.use(morgan("dev"));
  app.use(
    "/files",
    Express.static(path.resolve(__dirname, "..", "..", "..", "tmp", "uploads"))
  );

  app.use(rootRouter);

  return app;
};

export default setupApp;
