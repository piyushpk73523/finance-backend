
const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const categoryWise = await Record.aggregate([
    { $group: { _id: "$category", total: { $sum: "$amount" } } }
  ]);

  const recent = await Record.find().sort({ createdAt: -1 }).limit(5);

  res.json({
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    netBalance: (income[0]?.total || 0) - (expense[0]?.total || 0),
    categoryWise,
    recentTransactions: recent
  });
};
