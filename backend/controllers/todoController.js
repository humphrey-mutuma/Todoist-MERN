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
  // check if the todo exists in the database
  const oldTodo = await Todo.findById(req.params.id);
  if (!oldTodo) {
    res.status(404);
    throw new Error("Todo does not exist");
  }
  // update
  const newName = req.body.name;

  if (!newName) {
    res.status(400);
    throw new Error("Please add a todo name");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
    name: newName,
  });

  if (updatedTodo) {
    res.status(200).json(updatedTodo);
  }
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
