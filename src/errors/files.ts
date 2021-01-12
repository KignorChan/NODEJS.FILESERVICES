import { ErrorDefine } from "./ErrorDefine";

export default {
  FILE_NOT_EXIST: new ErrorDefine(
    10901,
    "FILE_NOT_EXIST",
    "FILE_ERROR",
    "The file does not exist!",
    "该文件不存在！"
  ),
  FILE_EXPIRED: new ErrorDefine(
    10902,
    "FILE_EXPIRED",
    "FILE_ERROR",
    "The file is expired!",
    "该文件已过期！"
  ),
  FILE_UNAVAILABLE: new ErrorDefine(
    10903,
    "FILE_UNAVAILABLE",
    "FILE_ERROR",
    "The file is unavailable!",
    "该文件暂时不能使用！"
  ),
};
