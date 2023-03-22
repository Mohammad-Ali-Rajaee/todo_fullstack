// import mongoose from "mongoose";
// const { schema , model } = mongoose;

// const todoSchema = new schema({
//     title: String,

// })

// const todo = model('todo' , todoSchema);
// export default todo;

// -------------------------

const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
