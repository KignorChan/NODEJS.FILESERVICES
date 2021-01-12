import app from "./app";
import http from "http";
import configs from "./configs";
import { currentTime } from "./utils/commons/timeUtils";

var httpServer = http.createServer(app);

httpServer.listen(configs.PORT, () => {
  console.log("start server, time: " + currentTime());
  console.log("listen port: " + configs.PORT);
});
