const Item = require("../models/itemModel");

const getAllItems = async (req, res) => {
  const user_id = req.user._id;

  const products = await Item.find({ user_id })
    .collation({ locale: "en", strength: 2 })
    .sort({ name: 1 });

  res.status(200).json(products);
};

const addItem = async (req, res) => {
  const { category, name, amount } = req.body;
  let emptyFields = [];
  if (!category) {
    emptyFields.push("category");
  }
  if (!name) {
    emptyFields.push("name");
  }
  if (amount === 0) {
    emptyFields.push("amount");
  }
  if (emptyFields.length > 0) {
    res.status(400).json({ error: "Please fill in empty fields", emptyFields });
  } else {
    try {
      const user_id = req.user._id;
      const item = await Item.create({
        category,
        name: name.toLowerCase(),
        amount,
        user_id,
      });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
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

const privatePing = async (req, res) => {
  const { secret } = req.params;
  if (secret === process.env.PRIVATE_SECRET) {
    const items = await Item.find();
    console.log("server pinged");
    res.status(200).json({ message: "successful ping" });
  }
};

module.exports = {
  getAllItems,
  addItem,
  editItem,
  deleteItem,
  privatePing,
};
