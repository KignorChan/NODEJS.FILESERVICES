const os = require("os");
const env = "production";

export default {
  PORT: 3109,
  env,
  environment: env,
  redis: process.env.REDIS_HOST ? process.env.REDIS_HOST.toString() : "",
  mongodb: process.env.MONGODB_HOST ? process.env.MONGODB_HOST.toString() : "",
  mysql: process.env.MYSQL_HOST ? process.env.MYSQL_HOST.toString() : "",
  mssql: process.env.MSSQL_HOST ? process.env.MSSQL_HOST.toString() : "",
  UPLOAD_FILES_PATH: os.homedir(),
  validate_token_domain:"http://192.168.2.189:3101",
  filesHostDomain: "http://files.azerobit.com",
};
