const express = require("express");

const router = express.Router();

const tasks = require("../data");

router.get(

  "/",

  (req, res) => {

    const waiting = tasks.filter(

      (t) => t.status === "waiting"

    ).length;

    const active = tasks.filter(

      (t) => t.status === "active"

    ).length;

    const completed = tasks.filter(

      (t) => t.status === "completed"

    ).length;

    const failed = tasks.filter(

      (t) => t.status === "failed"

    ).length;

    res.json({

      waiting,

      active,

      completed,

      failed

    });

  }

);

module.exports = router;