const taskQueue = require("../queue");

const tasks = require("../data");

exports.createTask = async (req, res) => {

  try {

    const { title, priority } = req.body;

    if (!title) {

      return res.status(400).json({

        message: "Title is required"

      });

    }

    const job = await taskQueue.add(

      "task",

      { title },

      {

        priority: priority || 3,

        attempts: 3,

        backoff: {

          type: "exponential",

          delay: 2000

        }

      }

    );

    tasks.push({

      id: job.id,

      title,

      priority: priority || 3,

      status: "waiting"

    });

    res.status(201).json({

      message: "Task added",

      jobId: job.id

    });

  }

  catch (error) {

    res.status(500).json({

      error: error.message

    });

  }

};

exports.getTasks = (req, res) => {

  res.json(tasks);

};

exports.clearTasks = (req, res) => {
  tasks.length = 0;

  res.json({
    message: "All tasks cleared"
  });
};