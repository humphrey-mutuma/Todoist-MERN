const express = require('express')
const router = express.Router()
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// get and create todos (they're in the same route)
router.get("/", getTodos).post(createTodo);
// update and delete todos in the same route
router.put("/:id", updateTodo).delete(deleteTodo);