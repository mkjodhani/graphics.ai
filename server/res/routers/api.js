const express = require("express");
const api = express.Router();
api.get("/", (req, res,next) => {
  res.json({
    status: "ACCEPT",
    data: {
      name: "Mayur Jodhani",
      date: "12/01/2001",
    },
  });
});
module.exports = api;