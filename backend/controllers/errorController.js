const asyncHandler = require("express-async-handler");

const getError = asyncHandler(async (req, res, next) => {
  res.status(404).json({ message: `${req.params.path} Error 404, Not Found` });
});
module.exports = { getError };
