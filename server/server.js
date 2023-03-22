// // require('dotenv').config();
// const express = require("express");
// const todoRouter = require("./router/todoRouter");
// // const connectDatabase = require("./db/connect");

// const app = express();

// const port = 3000;

// app.use("/todo", todoRouter);

// app.listen(port, () => {
//   console.log("server is running on port ", port);
// });

// -------------------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");
const { route } = require("./routes/todoRouter");
const routes = require("./routes/todoRouter");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log("listening on " + PORT));
