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
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo does not exist");
  }
  // update
  const newName = req.body;

  if (!newName) {
    res.status(400);
    throw new Error("Please add a todo name");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, newName, {
    new: true,
  });

  if (updatedTodo) {
    res.status(200).json(updatedTodo);
  }
});

// delete a todo
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Please add a todo ID");
  }
  // delete the specific todo
  const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
  if (deletedTodo) {
    res.status(200).json({ message: `${todo.name} deleted` });
  }
});

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
