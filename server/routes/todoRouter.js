// const express = require("express");
// const { get , post } = require('../controller/todoController');
// const router = express.Router();

// router.get("/todos", get);

// router.post("/todos ", post);

// module.exports = router;

// --------------------

const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");
const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
