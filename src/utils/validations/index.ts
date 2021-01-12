import { callApi,CallApiConfigSchema } from "../apiUtils/callApi";
import configs from "../../configs";

async function validateAccessToken(token: string): Promise<any> {
  try {
    var body = {
      accesstoken: token,
    };

    var config: CallApiConfigSchema = {
      method: "POST",
      timeout: 12000,
      body: body,
      headers: null,
    };

    var result = await callApi(
      configs.validate_token_domain + "/commons/accesstoken/validate",
      config
    );

    if(result!=null){
      if(result["status"]==true){
        return result["value"];
      }
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export default {
  validateAccessToken,
};
