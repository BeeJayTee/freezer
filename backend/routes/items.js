const express = require("express");

const router = express.Router();

const {
  getAllItems,
  addItem,
  editItem,
  deleteItem,
  privatePing,
} = require("../controllers/itemController");
const requireAuth = require("../middleware/requireAuth");

router.get("/", requireAuth, getAllItems);

// private ping
router.get(
  "/KAtKqHbH3FaMixrLBYF0Z6FFoQZ4yFS6gCVz3PTZPfhIhviPSh/:secret",
  privatePing
);

router.post("/add", requireAuth, addItem);

router.patch("/edit", requireAuth, editItem);

router.delete("/delete/:id", requireAuth, deleteItem);

module.exports = router;
