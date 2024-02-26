const express = require("express");
const app = express();

require("dotenv").config();
require("./database/db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");


const port = process.env.PORT || 3000;

const produtoRouter = require("./routes/produto");

app.use("/", produtoRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
