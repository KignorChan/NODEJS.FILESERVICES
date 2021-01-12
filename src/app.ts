import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { router } from "./router";
import { uploadRouter } from "./uploadRouter";
import { CustomError } from "./models/CustomError";

// import {ProductRoutes} from './routes/product';
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    // this.allRoutes();
  }
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(uploadRouter);
    router(this.app);
    this.app.use(function (
      err: any,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ): express.Response | void {
      if (err instanceof CustomError) {
        return res.status(err.code).json(err.toJson());
      } else if (err instanceof multer.MulterError) {
        return res.status(400).json({
          code: 400,
          message: err,
        });
      } else if (err instanceof Error) {
        console.log("error: " + err);

        if (String(err).search("no such file or directory") != -1) {
          return res.status(404).json({
            code: 404,
            message: "File not found!",
          });
        }
        return res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      } else {
        return res.json(err);
      }

      _next();
    });
  }
}
export default new App().app;