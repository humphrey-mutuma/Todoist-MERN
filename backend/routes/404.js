const express = require("express");
const router = express.Router();
const { getError } = require("../controllers/errorController");

router.route("*").get(getError);

module.exports = router;
