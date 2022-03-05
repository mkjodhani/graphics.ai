const express = require("express");
const userRouter = require("./api/userController");
const api = express.Router();
api.use("/user",userRouter);
api.get("/", async (req, res,next) => {
  res.json({
    status: "ACCEPT",
    data: {
      path:"/api"
    },
  });
});
module.exports = api;