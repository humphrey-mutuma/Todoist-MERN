const asyncHandler = require("express-async-handler");
// get them todos

const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all todos" });
});

// create a todo
// const createTodo = asyncHandler(async (req, res) => {
//   res.status(200).json({ message: "get all todos" });
// });

const createTodo = asyncHandler(async (req, res) => {
  const goal = req.body.text;
  console.log(goal);
  if (!goal) {
    res.status(400);
    throw new Error("Please add a goal");
  }

  res.status(200).json({ goal: goal });
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
