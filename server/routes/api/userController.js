const bodyParser = require("body-parser");
const express = require("express");
const userRouter = express.Router();
userRouter.route("/");
userRouter.use(bodyParser.urlencoded({
    'extended':true,
}))
userRouter.post("/login", (req, res) => {
  res.json({
    status: 200,
    data: {
      path: "/user/login",
    },
  });
});

userRouter.post("/register", (req, res) => {
  const body = req.body;
  console.log(body, "BODY");
  res.json({
    status: 200,
    data: {
      path: "/user/register",
      data:req.body
    },
  });
});

module.exports = userRouter;
