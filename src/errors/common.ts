import { ErrorDefine } from "./ErrorDefine";

export default {
  DATA_NOT_FOUND: new ErrorDefine(
    20401,
    "DATA_NOT_FOUND",
    "DATA_ERROR",
    "Data not found!",
    "找不到该数据！"
  ),
  DATA_ALREADY_EXIST: new ErrorDefine(
    20402,
    "DATA_ALREADY_EXIST",
    "DATA_ERROR",
    "Data already exist!",
    "该数据已经存在！"
  ),
  INVALID_DATA_INPUT: new ErrorDefine(
    20403,
    "INVALID_DATA_INPUT",
    "DATA_ERROR",
    "The data you input is invalid!",
    "您输入的数据无效！"
  ),
  INVALID_FLAG: new ErrorDefine(
    20404,
    "INVALID_FLAG",
    "DATA_ERROR",
    "The flag is invalid!",
    "您设置的状态无效！"
  ),
  MISSING_PARAM: new ErrorDefine(
    20405,
    "MISSING_PARAM",
    "DATA_ERROR",
    "Missing parameter!",
    "缺乏必要参数！"
  ),
  INVALID_METHOD: new ErrorDefine(
    20441,
    "INVALID_METHOD",
    "DATA_ERROR",
    "Invalid method to call api!",
    "无效方法！"
  ),
};
