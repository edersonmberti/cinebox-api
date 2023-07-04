import log4js from "log4js";

log4js.configure({
  appenders: {
    console: {
      type: "stdout",
      layout: {
        type: "colored",
      },
    },
  },
  categories: {
    default: {
      appenders: ["console"],
      level: process.env.LOG_LEVEL || "DEBUG",
    },
  },
});

export default log4js
