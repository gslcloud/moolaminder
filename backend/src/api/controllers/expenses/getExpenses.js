const Expense = require('../../../models/Expense');

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = getExpenses;