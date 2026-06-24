const { Worker } = require("bullmq");

const connection = require("./redis");

const tasks = require("./data");

const worker = new Worker(

  "taskQueue",

  async (job) => {

    const task = tasks.find(

      (t) => t.id == job.id

    );

    if (task) {

      task.status = "active";

    }

    console.log(

      `Processing ${job.data.title}`

    );

    await new Promise(

      (resolve) =>

      setTimeout(resolve, 3000)

    );

    console.log(

      `Completed ${job.data.title}`

    );

    if (task) {

      task.status = "completed";

    }

  },

  { connection }

);

worker.on(

  "failed",

  (job) => {

    const task = tasks.find(

      (t) => t.id == job.id

    );

    if (task) {

      task.status = "failed";

    }

  }

);

console.log(

  "Worker initialized"

);