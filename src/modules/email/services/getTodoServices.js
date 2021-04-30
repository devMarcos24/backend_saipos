import { hash } from "bcrypt";

import { createTodoValidation } from "../validation";

class CreateTodoService {
  constructor(db) {
    this.db = db;
  }

  async execute() {
    const response = await this.db.findAll();

    return response || [];
  }
}

export default CreateTodoService;
