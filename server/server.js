const express = require("express");
const formidable = require("express-formidable");
const app = express();
const apiRouter = require('./res/routes/api');
app.use(formidable());
const dotenv = require("dotenv");
dotenv.config();
app.use(express.static(__dirname + "/public"));
app.use("/api",apiRouter);
app.listen(4242, () => {
  console.log(`Server is up and running on http://localhost:4242`);
});
