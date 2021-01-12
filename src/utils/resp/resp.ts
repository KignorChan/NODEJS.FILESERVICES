export default {
    ok: (value: any = null) => {
      if (Array.isArray(value)) {
        return { code: 200, count: value.length, value, status: true };
      }
  
      return { code: 200, value, status: true };
    },
    fail: (msg: any = null, errorCode: any = null) => {
      return { code: 204, msg, errorCode, status: false };
    },
    // failPhoneNumberInUsed: () => {
    //   return {
    //     code: 204,
    //     msg: "The phone number is already in used! ",
    //     msgCN: "该电话号码已经有人使用了！",
    //     errorCode: "PHONE_NUMBER_IN_USED",
    //     status: false,
    //   };
    // },
    // failUserNotExist: () => {
    //   return {
    //     code: 204,
    //     msg: "The user does not exist!",
    //     msgCN: "该用户不存在！",
    //     errorCode: "USER_NOT_EXIST",
    //     status: false,
    //   };
    // },
    // failUserAlreadyExist: () => {
    //   return {
    //     code: 204,
    //     msg: "The user to signin already exist!",
    //     msgCN: "该用户已经存在！",
    //     errorCode: "USER_ALREADY_EXIST",
    //     status: false,
    //   };
    // },
    // failInvalidCaptcha: () => {
    //   return {
    //     code: 204,
    //     msg: "Captcha code is invalid!",
    //     msgCN: "无效验证码！",
    //     errorCode: "INVALID_CAPTCHA",
    //     status: false,
    //   };
    // },
    // failMissingPhoneNumber: () => {
    //   return {
    //     code: 204,
    //     msg: "Please provide full phone number!",
    //     msgCN: "请输入电话号码！",
    //     errorCode: "MISSING_PHONENUMBER",
    //     status: false,
    //   };
    // },
    // failInvalidSmsCode: () => {
    //   return {
    //     code: 204,
    //     msg: "Sms code is invalid!",
    //     msgCN: "无效短信验证码！",
    //     errorCode: "INVALID_SMS_CODE",
    //     status: false,
    //   };
    // },
    // failMissingUsername: () => {
    //   return {
    //     code: 204,
    //     msg: "Please provide username!",
    //     msgCN: "请输入用户名！",
    //     errorCode: "MISSING_USERNAME",
    //     status: false,
    //   };
    // },
    // failMissingPassword: () => {
    //   return {
    //     code: 204,
    //     msg: "Please enter your password!",
    //     msgCN: "请输入密码！",
    //     errorCode: "MISSING_PASSWORD",
    //     status: false,
    //   };
    // },
    // failConfirmPasswordNotMatch: () => {
    //   return {
    //     code: 204,
    //     msg: "Confirm password not match!",
    //     msgCN: "确认密码不一致！",
    //     errorCode: "CONFIRM_PASSWORD_NOT_MATCH",
    //     status: false,
    //   };
    // },
    error: (code: number, error: string) => {
      return { code, error, status: false };
    },
  
    dbError: (error: string) => {
      return { code: 500, error, status: false };
    },
    failValueOutOfRange: () => {
      return {
        code: 204,
        msg: "Value out of range",
        msgCN: "输入的数值超出可接受范围！",
        errorCode: "VALUE_OUT_OF_RANGE",
        status: false,
      };
    },
  
    // failInvalidToken: () => {
    //   return {
    //     code: 20100,
    //     msg: "Invalid Token issuer/subject.",
    //     msgCN: "",
    //     errorCode: "INVALID_TOKEN",
    //     status: false,
    //   };
    // },
  
    /// token relative, ref: https://support.twilio.com/hc/en-us/articles/115015890207-Troubleshooting-Invalid-Access-Tokens#:~:text=The%20most%20common%20error%20codes%20for%20Access%20Tokens%20are%20due,Invalid%20Access%20Token%20issuer%2Fsubject&text=Error%2020105%20Access%20Token%20not,Time%20Exceeds%20Maximum%20Time%20Allowed
    // failInvalidAccessToken: () => {
    //   return {
    //     code: 20103,
    //     msg: "Invalid Access Token issuer/subject.",
    //     msgCN: "",
    //     errorCode: "INVALID_ACCESS_TOKEN",
    //     status: false,
    //   };
    // },
    // failAccessTokenNotValid: () => {
    //   return {
    //     code: 20105,
    //     msg: "Access Token not yet valid.",
    //     msgCN: "",
    //     errorCode: "ACCESS_TOKEN_NOT_VALID",
    //     status: false,
    //   };
    // },
    // failInvalidAccessTokenSignature: () => {
    //   return {
    //     code: 20107,
    //     msg: "Invalid Access Token signature.",
    //     msgCN: "",
    //     errorCode: "INVALID_ACCESS_TOKEN_SIGNATURE",
    //     status: false,
    //   };
    // },
    // failAuthenticationFail: () => {
    //   return {
    //     code: 20151,
    //     msg: "Authentication Failed.",
    //     msgCN: "",
    //     errorCode: "AUTHENTICATION_FAIL",
    //     status: false,
    //   };
    // },
    // failTokenExpired: () => {
    //   return {
    //     code: 20157,
    //     msg: "Expiration Time Exceeds Maximum Time Allowed",
    //     msgCN: "",
    //     errorCode: "TOKEN_EXPIRED",
    //     status: false,
    //   };
    // },
  };
  