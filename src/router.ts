import { limiter } from "./utils/commons/rateLimiter";
import fs from "fs";
import express, { Request, Response, NextFunction } from "express";
import FileDbServices from "./sequelize/dbServices/files";
import fileIdUtils from "./utils/files/fileIdUtils";
import Errors from "./errors";
import resp from "./utils/resp/resp";

export function router(app: express.Application) {
  app
    .route("/ping")
    .post(limiter("/ping"), (req: any, res: any) => {
      res.send("files server pong!");
    })
    .get(limiter("/ping"), (req: any, res: any) => {
      res.send("files server pong!");
    });

  app.post(
    "/files/setter",
    limiter("/files/setter"),
    async (req: Request, res: Response) => {
      try {
        var fileUrl = req.body["fileUrl"];

        if (fileUrl == null) {
          res.send(Errors.CommonError.INVALID_DATA_INPUT);
          return;
        }

        var fileId = fileIdUtils.imageDbSetterTransfommer(fileUrl);

        res.send(
          resp.ok({
            fileUrl: fileId,
          })
        );
        return;
      } catch (error) {
        res.send(error);
      }
    }
  );

  app.post(
    "/files/getter",
    limiter("/files/getter"),
    async (req: Request, res: Response) => {
      try {
        var fileUrlRaw = req.body["fileUrl"];

        if (fileUrlRaw == null) {
          res.send(Errors.CommonError.INVALID_DATA_INPUT);
          return;
        }

        var fileUrl = fileIdUtils.imageDbGetterTransfommer(fileUrlRaw);

        res.send(
          resp.ok({
            fileUrl,
          })
        );
        return;
      } catch (error) {
        res.send(error);
      }
    }
  );

  app.post(
    "/files/url_to_id",
    limiter("/files/url_to_id"),
    async (req: Request, res: Response) => {
      try {
        var fileUrl = req.body["fileUrl"];

        if (fileUrl == null) {
          res.send(Errors.CommonError.INVALID_DATA_INPUT);
          return;
        }

        var fileId = fileIdUtils.transformUrlToFileId(fileUrl);

        res.send(
          resp.ok({
            fileId,
          })
        );
        return;
      } catch (error) {
        res.send(error);
      }
    }
  );

  app.post(
    "/files/id_to_url",
    limiter("/files/id_to_url"),
    async (req: Request, res: Response) => {
      try {
        var fileId = req.body["fileId"];

        if (fileId == null) {
          res.send(Errors.CommonError.INVALID_DATA_INPUT);
          return;
        }

        var fileUrl = fileIdUtils.getUrlFromFileId(fileId);

        res.send(
          resp.ok({
            fileUrl,
          })
        );
        return;
      } catch (error) {
        res.send(error);
      }
    }
  );

  app.get(
    "/files/:fileId",
    limiter("/files/:fileId"),
    async (req: Request, res: Response) => {
      try {
        var fileId: string = req.params["fileId"];
        var path = await FileDbServices.getFilePathFromFileId(fileId);

        res.sendFile(path);
      } catch (error) {
        res.send(error);
      }
    }
  );

  app
    .route("/*")
    .post(limiter("/*"), (req: any, res: any) => {
      res.send("invalid route!");
    })
    .get(limiter("/*"), (req: any, res: any) => {
      res.send("invalid route!");
    });
}
