const asyncHandler = require("express-async-handler");
const Todo = require("../models/todo");
// get them todos

const getTodos = asyncHandler(async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json(todo);
});

// create a todo
const createTodo = asyncHandler(async (req, res) => {
  const todo = req.body.name;
  if (!todo) {
    res.status(400);
    throw new Error("Please add a todo");
  }
  const createdTodo = await Todo.create({
    name: todo,
  });

  if (createdTodo) {
    res.status(201).json(createdTodo);
  }
});

// update a todo
const updateTodo = asyncHandler(async (req, res) => {
  const goalId = req.params.id;
  if (!goalId) {
    res.status(400);
    throw new Error("Please add a goal ID");
  }
  res.status(200).json({ message: `update  todo ${goalId}` });
});

// delete a todo
const deleteTodo = asyncHandler(async (req, res) => {
  const goalId = req.params.id;
  if (!goalId) {
    res.status(400);
    throw new Error("Please add a goal ID");
  }
  res.status(200).json({ message: `delete  todo ${goalId}` });
});

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
