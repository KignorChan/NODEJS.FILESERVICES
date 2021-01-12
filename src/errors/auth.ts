import { ErrorDefine } from "./ErrorDefine";

export default {
  /// Token 相关
  INVALID_TOKEN: new ErrorDefine(
    10001,
    "INVALID_TOKEN",
    "AUTH_ERROR",
    "Invalid Token issuer/subject."
  ),
  TOKEN_EXPIRED: new ErrorDefine(
    10002,
    "TOKEN_EXPIRED",
    "AUTH_ERROR",
    "Expiration Time Exceeds Maximum Time Allowed"
  ),
  TOKEN_NOT_BEFORE_ERROR: new ErrorDefine(
    10003,
    "TOKEN_NOT_BEFORE_ERROR",
    "AUTH_ERROR",
    "Token Not Available Yet"
  ),
  INVALID_ACCESS_TOKEN_SIGNATURE: new ErrorDefine(
    10004,
    "INVALID_ACCESS_TOKEN_SIGNATURE",
    "AUTH_ERROR",
    "Invalid Access Token signature."
  ),
  AUTHENTICATION_FAIL: new ErrorDefine(
    10005,
    "AUTHENTICATION_FAIL",
    "AUTH_ERROR",
    "Authentication Failed."
  ),

  /// 输入相关
  AUTH_INPUT_ERROR: new ErrorDefine(
    10020,
    "AUTH_INPUT_ERROR",
    "AUTH_ERROR",
    "Some error with input data.",
    "输入的数据无效！"
  ),
  INVALID_CAPTCHA: new ErrorDefine(
    10021,
    "INVALID_CAPTCHA",
    "AUTH_ERROR",
    "Authentication Failed.",
    "无效验证码！"
  ),
  MISSING_USERNAME: new ErrorDefine(
    10022,
    "MISSING_USERNAME",
    "AUTH_ERROR",
    "Please provide username!",
    "请输入用户名！"
  ),
  MISSING_PHONENUMBER: new ErrorDefine(
    10023,
    "MISSING_PHONENUMBER",
    "AUTH_ERROR",
    "Please provide full phone number!",
    "请输入电话号码！"
  ),
  INVALID_SMS_CODE: new ErrorDefine(
    10024,
    "INVALID_SMS_CODE",
    "AUTH_ERROR",
    "Sms code is invalid!",
    "无效短信验证码！"
  ),
  MISSING_PASSWORD: new ErrorDefine(
    10025,
    "MISSING_PASSWORD",
    "AUTH_ERROR",
    "Please enter your password!",
    "请输入密码！"
  ),
  CONFIRM_PASSWORD_NOT_MATCH: new ErrorDefine(
    10026,
    "CONFIRM_PASSWORD_NOT_MATCH",
    "AUTH_ERROR",
    "Confirm password not match!",
    "确认密码不一致！"
  ),
  USER_PASSWORD_NOT_SET: new ErrorDefine(
    10027,
    "USER_PASSWORD_NOT_SET",
    "AUTH_ERROR",
    "The user has not set password yet!",
    "该用户还没设定密码！"
  ),
  INVALID_PASSWORD: new ErrorDefine(
    10028,
    "INVALID_PASSWORD",
    "AUTH_ERROR",
    "The entered password is incorrect!",
    "输入的密码不正确！"
  ),

  /// 其他
  USER_NOT_EXIST: new ErrorDefine(
    10071,
    "USER_NOT_EXIST",
    "AUTH_ERROR",
    "The user does not exist!",
    "该用户不存在！"
  ),
  USER_ALREADY_EXIST: new ErrorDefine(
    10072,
    "USER_ALREADY_EXIST",
    "AUTH_ERROR",
    "The user to signin already exist!",
    "该用户已经存在！"
  ),
  PHONE_NUMBER_IN_USED: new ErrorDefine(
    10073,
    "PHONE_NUMBER_IN_USED",
    "AUTH_ERROR",
    "The phone number is already in used!",
    "该电话号码已经有人使用了！"
  ),
  USERNAME_ALREADY_IN_USED: new ErrorDefine(
    10072,
    "USERNAME_ALREADY_IN_USED",
    "AUTH_ERROR",
    "The username is already in used",
    "该用户名已经被使用！"
  ),
};
