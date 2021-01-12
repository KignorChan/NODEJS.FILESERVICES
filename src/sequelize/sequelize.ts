import { Sequelize } from "sequelize";
import configs from "../configs";

const sequelize = new Sequelize(configs.mysql, {
  logging:
    process.env.NODE_ENV == "production" || process.env.NODE_ENV == "stage"
      ? false
      : true,
});

export default sequelize;
