
const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const { amount, type, category, date, notes } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  const record = await Record.create({
    amount,
    type,
    category,
    date,
    notes,
    createdBy: req.user._id
  });

  res.status(201).json(record);
};

exports.getRecords = async (req, res) => {
  const { page = 1, limit = 10, type, category } = req.query;

  const query = {};
  if (type) query.type = type;
  if (category) query.category = category;

  const records = await Record.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!record) return res.status(404).json({ message: "Record not found" });

  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  const record = await Record.findByIdAndDelete(req.params.id);
  if (!record) return res.status(404).json({ message: "Record not found" });

  res.json({ message: "Deleted successfully" });
};
