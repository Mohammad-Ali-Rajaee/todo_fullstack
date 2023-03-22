// const get = (req, res) => {
//   res.status(200).json({ message: "controller get" });
// };

// const post = (req, res) => {
//   res.status(200).json({ message: "controller post" });
// };

// module.exports = { get, post };

// ------------------------------

const todoModel = require("../model/todoModel");

const getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

const saveTodo = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text }).then((data) => {
    console.log("added seccessfully");
    console.log(data);
    res.send(data);
  });
};

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated seccessfully"))
    .catch((err) => console.log(err));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted seccessfully"))
    .catch((err) => res.send(err));
};

module.exports = { getTodo, saveTodo, deleteTodo, updateTodo };
