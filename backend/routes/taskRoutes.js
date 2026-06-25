const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  clearTasks
} = require("../controllers/taskController");


router.post("/", createTask);

router.get("/", getTasks);

router.delete("/", clearTasks);

module.exports = router;