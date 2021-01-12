import expressRateLimit from "express-rate-limit";
import { currentTime } from "./timeUtils";

export function limiter(
  api: string = "",
  max: number = 15,
  windowMs: number = 900000
) {
  var wM = 15 * 60 * 1000; // 15 minutes
  if (windowMs != null) {
    wM = windowMs;
  }

  var m = 100;
  if (max != null) {
    m = max;
  }

  return expressRateLimit({
    windowMs: wM,
    max: m,
    onLimitReached: (req, res, options) => {
      var time = currentTime();
      console.log(
        "limit reached, time: " + time + ", api: " + api + ", ip: " + req.ip
      );
      if (req.body) {
        console.log("data: " + JSON.stringify(req.body));
      }
      try {
        res
          .status(429)
          .send({ code: 429, status: false, msg: options.message });
        return;
      } catch (e) {
        console.log("rateLimit onLimitReached: " + e);
        return;
      }
    },
    handler: (req, res, options) => {
      // console.log("limit reached, ip: " + req.ip);
      try {
        res.status(429).send({
          code: 429,
          status: false,
          msg: "Too many requests, please try again later.",
        });
        return;
      } catch (e) {
        console.log("rateLimit handler: " + e);
        return;
      }
    },
  });
}