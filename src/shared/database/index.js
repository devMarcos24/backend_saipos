import { Sequelize } from "sequelize";

import databaseConfig from "../../config/database";
import todo from "../Models/todos";

const models = [todo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const sequelize = new Sequelize(databaseConfig); // Example for postgres
    // const sequelize = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(sequelize))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

export default new Database();
