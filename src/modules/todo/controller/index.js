import CreateTodoService from "../services/createTodoSevice";
import CreateNothingTodoService from "../services/createNothingTodoSevice";
import GetTodoServices from "../services/getTodoServices";
import DeleteTodoServices from "../services/deleteTodoService";
import UpdateTodoService from "../services/updateTodoService";

let database;

class TodoController {
  constructor(db) {
    database = db;
  }

  async create(req, res) {
    const todo = req.body;

    try {
      const createTodoService = new CreateTodoService(database);
      const response = await createTodoService.execute(todo);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const getTodoServices = new GetTodoServices(database);
      const response = await getTodoServices.execute();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleteTodoServices = new DeleteTodoServices(database);
      await deleteTodoServices.execute({ id: req.params.id });

      return res
        .status(200)
        .json({ message: "to-do deleted", statusCode: 200 });
    } catch (error) {
      return res.status(400).json({ error: error.message, statusCode: 400 });
    }
  }

  async update(req, res) {
    try {
      const updateTodoService = new UpdateTodoService(database);

      const response = await updateTodoService.execute({
        id: req.params.id,
        status: req.body.status,
        back: req.body.back,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async nothing(req, res) {
    try {
      const createNothingTodoService = new CreateNothingTodoService(database);
      const response = await createNothingTodoService.execute();
      return res.status(200).json({ statusCode: 200, data: response });
    } catch (error) {
      return res.status(400).json({ statusCode: 400, error: error.message });
    }
  }
}

export default TodoController;
