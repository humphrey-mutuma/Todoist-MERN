const asyncHandler = require("express-async-handler");
// get them todos
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all todos" });
});

// create a todo
const createTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "create a todo" });
});

// update a todo
const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update  todo ${id}` });});

// delete a todo
const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete  todo ${id}` });
});

mpodule.exports = { getTodos, createTodo, updateTodo, deleteTodo };
