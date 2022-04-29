const express = require("express");
const router = express.Router();
const create = require("./controller/pagination.controller");
const queryTest = require("./controller/pagination.controller");
router.post("/createTest", create.createTest);
router.get("/", queryTest.getTest);

module.exports = router;
