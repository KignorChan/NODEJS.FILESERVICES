import configsDev from "./config.development";
import configsProduction from "./config.production";
import configsStage from "./config.stage";

var configs = configsDev;
if (process.env.NODE_ENV == "development") {
  configs = configsDev;
} else if (process.env.NODE_ENV == "production") {
  configs = configsProduction;
} else if (process.env.NODE_ENV == "stage") {
  configs = configsStage;
}
export default configs;
