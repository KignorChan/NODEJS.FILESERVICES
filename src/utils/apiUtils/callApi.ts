import axios from "axios";
import Errors from "../../errors";

interface CallApiConfigSchema {
  body: object | null;
  headers: object | null;
  timeout: number;
  method: string;
}

async function callApi(
  url: string,
  configs: CallApiConfigSchema
): Promise<any> {
  try {
    var body: object = {};
    var headers: object = {
      "Content-Type": "application/json",
    };

    var response;

    if (configs != null) {
      if (configs.body != null) {
        body = configs.body;
      }

      if (configs.headers != null) {
        var hKeys = Object.keys(configs.headers);
        var hKeysNum = hKeys.length;
        for (var i = 0; i < hKeysNum; i++) {
          headers[hKeys[i]] = configs.headers[hKeys[i]];
        }
      }

      if (configs.method == "GET") {
        response = await axios.get(url, { data: body, headers });
      } else if (configs.method == "POST") {
        response = await axios.post(url, body, { headers });
      } else {
        throw Errors.CommonError.INVALID_METHOD;
      }
    }

    if (response.status == 200) {
      return response.data;
    } else {
      throw { status: false, code: response.status };
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export { callApi, CallApiConfigSchema };
