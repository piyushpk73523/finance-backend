
const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.updateUser = async (req, res) => {
  const { role, status } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role, status },
    { new: true }
  ).select("-password");

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};
