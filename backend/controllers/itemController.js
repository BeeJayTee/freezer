const Item = require("../models/itemModel");

const getAllItems = async (req, res) => {
  const products = await Item.find({}).sort({ createdAt: 1 });

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

const editItem = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(id, { amount });
    res.status(200).json({ message: `${item.name} updated` });
  } catch (err) {
    res.staus(400).json({ error: "could not be updated" });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    res.status(200).json({ message: `${item.name} deleted` });
  } catch (err) {
    res.status(400).json({ error: `could not be deleted` });
  }
};

module.exports = { getAllItems, addItem, editItem, deleteItem };
