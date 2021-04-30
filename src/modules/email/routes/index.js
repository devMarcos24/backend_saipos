import { Router } from "express";

class TodoRoutes {
  static configure(emailController) {
    const route = Router();

    route.post("/", emailController.teste);

    return route;
  }
}

export default TodoRoutes;
