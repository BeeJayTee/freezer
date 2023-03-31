const express = require("express");

const router = express.Router();

const { getAllItems, addItem } = require("../controllers/itemController");

router.get("/", getAllItems);

router.post("/add", addItem);

module.exports = router;
