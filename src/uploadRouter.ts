import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import { CustomError } from "./models/CustomError";
import Validations from "./utils/validations";
import Errors from "./errors";
import fs from "fs";
import configs from "./configs";
import FileDbService from "./sequelize/dbServices/files";
import { File } from "./classes/file";
import FileIdUtils from "./utils/files/fileIdUtils";

import resp from "./utils/resp/resp";

const router = express.Router();
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    var authorization = req.headers["authorization"];
    var tokenObj = await Validations.validateAccessToken(String(authorization));
    if (tokenObj) {
      if (tokenObj["uid"]) {
        var path: string =
          configs.UPLOAD_FILES_PATH +
          "/uploads/" +
          tokenObj["uid"] +
          "/" +
          file.fieldname +
          "/";
        fs.mkdirSync(path, { recursive: true });
        cb(null, path);
        return;
      }
    }
  },

  filename: function (req: any, file: any, cb: any) {
    var ext: string = file.originalname.split(".").slice(-1)[0];
    var timestamp = new Date().getTime();
    var fileId =
      "file_" +
      new Date().getTime().toString(36) +
      Math.random().toString(36).slice(2);

    var filename = fileId + "." + ext;
    cb(null, filename);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  console.log("33333333333333333333333333")
  if (file.fieldname == "files") {
    console.log("ashfjdhskjfhdskj: "+file.mimetype);
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new CustomError(415, "Unsupport media type!"), false);
    }
  } else {
    cb(new CustomError(415, "Unsupport media type!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post(
  "/upload/images",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("111111111111111111111113 "+JSON.stringify(req.headers));
      var authorization = req.headers["authorization"];
      var tokenObj = await Validations.validateAccessToken(String(authorization));
      if (tokenObj) {
        if (tokenObj["uid"]) {
          next();
          return;
        }
      }

      res.send(Errors.AuthError.AUTHENTICATION_FAIL);
    } catch (error) {
      res.send(error);
    }
  },
  upload.array("files", 10),
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("11111111111111111111111 "+JSON.stringify(req.headers));
    var authorization = req.headers["authorization"];
    var tokenObj = await Validations.validateAccessToken(String(authorization));
    if (tokenObj) {
      if (tokenObj["uid"]) {
        var uid = tokenObj["uid"];

        var filesInfos: File[] = [];
        if (req.files) {
          console.log("22222222222222222222222222222: "+req.files.length);
          if (req.files.length > 0) {
            for (var i = 0; i < req.files.length; i++) {
              var ext: string = req.files[i].originalname
                .split(".")
                .slice(-1)[0];
              filesInfos.push(
                new File({
                  fileId: req.files[i].filename.split(".")[0],
                  uid: uid,
                  filename: req.files[i].filename.trim(),
                  originalname: req.files[i].originalname.trim(),
                  fieldname: req.files[i].fieldname.trim(),
                  mimetype: req.files[i].mimetype.trim(),
                  ext: ext,
                  path: req.files[i].path.replace(/\\/g, "/"),
                  size: req.files[i].size,
                })
              );
            }
          }
        }
        var result = await FileDbService.createFilesRecords(filesInfos);

        var toReturn: any[] = [];
        if (result) {
          for (var i = 0; i < result.length; i++) {
            var temp = result[i].toJSON();
            temp["url"] = FileIdUtils.getUrlFromFileId(result[i]["fileId"]);
            toReturn.push(temp);
          }
 
          res.send(resp.ok(toReturn));
          return;
        }
      }
    }

    res.send(resp.fail("Unknown error!"));
  }
);
export { router as uploadRouter };
