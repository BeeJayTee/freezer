const express = require("express");

const router = express.Router();

const {
  getAllItems,
  bumpItems,
  addItem,
  editItem,
  deleteItem,
} = require("../controllers/itemController");
const requireAuth = require("../middleware/requireAuth");

router.get("/", requireAuth, getAllItems);

router.get("/bump/:id", bumpItems);

router.post("/add", requireAuth, addItem);

router.patch("/edit", requireAuth, editItem);

router.delete("/delete/:id", requireAuth, deleteItem);

module.exports = router;
