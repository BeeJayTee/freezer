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
router.get("/Ct6t6c#GOrdgJEhYOZSJtKUER4h9I8Q6PeRK6ZtSKtSX1fumXQ", privatePing);

router.post("/add", requireAuth, addItem);

router.patch("/edit", requireAuth, editItem);

router.delete("/delete/:id", requireAuth, deleteItem);

module.exports = router;
