import FileModel from "../../dbModels/files";
import Errors from "../../../errors";
import { File } from "../../../classes/file";

async function createFilesRecords(filesInfos: File[]): Promise<FileModel[]> {
  try {
    if (!filesInfos) {
      throw Errors.CommonError.INVALID_DATA_INPUT;
    }

    var bulks: object[] = [];
    for (var i = 0; i < filesInfos.length; i++) {
      bulks.push(filesInfos[i].toCreateRecordJson());
    }

    return await FileModel.bulkCreate(bulks);
  } catch (error) {
    throw error;
  }
}

async function getFilePathFromFileId(fileId: string): Promise<string> {
  try {
    var result = await FileModel.findOne({
      where: {
        fileId,
      },
      attributes: ["path", "flag"],
    });

    if (result) {
      if (result["flag"] != 1) {
        throw Errors.FileError.FILE_UNAVAILABLE;
      }
      if (result["path"]) {
        return result["path"];
      }
    }

    throw Errors.FileError.FILE_NOT_EXIST;
  } catch (error) {
    throw error;
  }
}

export default {
  createFilesRecords,
  getFilePathFromFileId,
};
