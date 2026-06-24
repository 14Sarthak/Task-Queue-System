const express = require("express");
const cors = require("cors");

require("./redis");
require("./queue");
require("./worker");

const taskRoutes = require("./routes/taskRoutes");
const statsRoutes = require("./routes/statsRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.use("/tasks", taskRoutes);
app.use("/stats", statsRoutes);

app.listen(9200, () => {
  console.log("Server running on 9200");
});