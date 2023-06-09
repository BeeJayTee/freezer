const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const connectDB = require("./config/database");
const cors = require("cors");
const itemRoutes = require("./routes/items");
const userRoutes = require("./routes/users");
const cron = require("node-cron");
const Item = require("./models/itemModel");
const { privatePing } = require("./controllers/itemController");

// cron.schedule("*/1 * * * *", async () => {
//   privatePing();
//   console.log("ping");
// });

// middleware
app.use(express.json());
app.use(cors());

// quick custom log middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// middleware routes
app.use("/items", itemRoutes);
app.use("/users", userRoutes);

connectDB();
app.listen(process.env.PORT || 4141, () => [
  console.log(`listening on port: ${process.env.PORT || 4141}`),
]);
