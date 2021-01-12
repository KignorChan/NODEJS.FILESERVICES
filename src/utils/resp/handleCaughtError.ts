import resp from "./resp";
import Errors from "../../errors";

export default function handleCaughtError(error: any) {
  console.log("ERROR: " + error);

  if (error.name == "SequelizeUniqueConstraintError") {
    if (error.parent.code == "ER_DUP_ENTRY") {
      return Errors.CommonError.DATA_ALREADY_EXIST;
    }
    return resp.fail(error.parent.sqlMessage, error.parent.code);
  } else if (error.name == "SequelizeDatabaseError") {
    return resp.fail(error.parent.sqlMessage, error.parent.code);
  } else if (error.status == false) {
    return error;
  } else if (error["from"] == "CARGOGO") {
    error["status"] = false;
    return error;
  } else {
    return resp.fail(error);
  }
}
