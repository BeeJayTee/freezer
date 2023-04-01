const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
