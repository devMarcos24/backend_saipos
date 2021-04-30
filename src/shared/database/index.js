import pg from "pg";
import { Sequelize } from "sequelize";

import databaseConfig from "../../config/database";
import todo from "../Models/todos";
var client = new pg.Client(
  "postgres://ouiqcmfdjgcmtb:877291d9e2c3f58aaed0fc4bc8cefea7d8dca86f9c49a25d2b7fe234cbc8d593@ec2-18-214-140-149.compute-1.amazonaws.com:5432/d182ch888mejf7"
);

client.connect();

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
