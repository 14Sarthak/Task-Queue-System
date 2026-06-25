const express = require("express");
const cors = require("cors");

require("./redis");
require("./queue");
require("./worker");

const taskRoutes = require("./routes/taskRoutes");
const statsRoutes = require("./routes/statsRoutes");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://your-vercel-app.vercel.app" // replace after deploying frontend
  ],
  methods: ["GET", "POST", "OPTIONS"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.use("/tasks", taskRoutes);
app.use("/stats", statsRoutes);

const PORT = process.env.PORT || 9200;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});