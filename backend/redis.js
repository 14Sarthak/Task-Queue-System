const Redis = require("ioredis");
console.log("REDIS_URL:", process.env.REDIS_URL);
console.log("Length:", process.env.REDIS_URL?.length);
const connection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

connection.on("connect", () => {
  console.log("Redis connected");
});

connection.on("error", (err) => {
  console.error("Redis Error:", err);
});

module.exports = connection;