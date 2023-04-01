const Item = require("../models/itemModel");

const getAllItems = async (req, res) => {
  const products = await Item.find({}).sort({ createdAt: -1 });

  res.status(200).json(products);
};

const addItem = async (req, res) => {
  try {
    const { category, name, amount } = req.body;
    const item = await Item.create({ category, name, amount });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllItems, addItem };
