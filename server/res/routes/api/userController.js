const bodyParser = require("body-parser");
const express = require("express");
const userRouter = express.Router();
const { Users }  = require ('../../models/userModels');
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

userRouter.post("/register", async (req, res) => {
  const {user} = req.fields;
  const userJSON = JSON.parse(user);
  const userObj = new Users(userJSON);
  const result = await userObj.save();
  res.json({  
    status: 200,
    data: result
  });
});

module.exports = userRouter;
