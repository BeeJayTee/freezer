const express = require("express");

const router = express.Router();

const {
  getAllItems,
  addItem,
  editItem,
  deleteItem,
} = require("../controllers/itemController");

router.get("/", getAllItems);

router.post("/add", addItem);

router.patch("/edit", editItem);

router.delete("/delete/:id", deleteItem);

module.exports = router;
